import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/database/prisma.service';
import { hash } from 'argon2';
import { isPrismaError } from 'src/common/utils';
import {  User} from '@prisma/client';


interface findOneByFieldOptions {
    throwError?: boolean
    includeRelations?: boolean
}




@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(userData: CreateUserInput) {
        try {
            const user = await this.prisma.user.create({
                data: {
                    ...userData,
                    password: await hash(userData.password),
                    photo: `https://api.dicebear.com/6.x/initials/svg?seed=${userData.username}`,
                },
            });
            console.log('here is the created user --> 👨 ', user);
            return user;
        } catch (error) {
            isPrismaError(error);
            throw error;
        }
    }

    public async findOneByField(
        field: string,
        value: string | number,
        options?: findOneByFieldOptions,
    ) {
        try {
            let user: User;

            if (!options || !options.includeRelations) {
                user = await this.prisma.user.findFirst({
                    where: {
                        [field]: value,
                    },
                });
            } else {
                user = await this.prisma.user.findFirst({
                    where: {
                        [field]: value,
                    },
                    include: {
                        threads: true,
                       
                    },
                });
            }

            if (options && options.throwError) {
                if (!user) {
                    throw new NotFoundException(
                        `User with ${field} of value ${value} not found`,
                    );
                }
            }

            return user;
        } catch (err) {
            throw err;
        }
    }
    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserInput: UpdateUserInput) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
