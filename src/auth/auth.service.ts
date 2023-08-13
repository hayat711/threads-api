import { Injectable } from '@nestjs/common';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { AuthResult, CredentialsInput } from './dto/create-auth.input';
import * as argon2 from 'argon2';
import { UserService } from 'src/user/user.service';
import { isPrismaError } from 'src/common/utils';
import { InvalidCredentials } from 'src/common/exceptions/invalid-credentials';
import { User } from '@prisma/client';
import { MeResult } from './dto/create-profile.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}
    async register(data: CreateUserInput) {
        try {
            const profile = await this.userService.create(data);
            delete profile.password;

            const result: AuthResult = {
                profile,
                statusCode: 200,
                message: 'User created successfully! Signed up',
            };
            return result;
        } catch (error) {
            isPrismaError(error);
            throw error;
        }
    }

    public async login(credentialsInput: CredentialsInput) {
        try {
            const { username, password } = credentialsInput;
            const profile = await this.userService.findOneByField(
                'username',
                username,
            );
            if (!profile) {
                throw new InvalidCredentials();
            }
            const isPasswordValid = await argon2.verify(
                profile.password,
                password,
            );
            if (!isPasswordValid) {
                throw new InvalidCredentials();
            }
            delete profile.password;

            const result: AuthResult = {
                profile,
                statusCode: 200,
                message: 'User logged in successfully! Signed in',
            };
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async serializeSession(user: User) {
        try {
            let { createdAt, updatedAt, ...rest } = user;
            createdAt = new Date(createdAt);
            updatedAt = new Date(updatedAt);

            const profile = {
                ...rest,
                createdAt,
                updatedAt,
            };

            return profile;
        } catch (error) {
            throw error;
        }
    }

    public async getMe(userId: string) {
        try {
            const profile = await this.userService.findOneByField(
                'id',
                userId,
            );
            delete profile.password;

            const result: MeResult = {
                profile,
                statusCode: 200,
                message: 'User profile fetched successfully',
            };
            return result;
        } catch (error) {
            throw error;
        }
    }
}
