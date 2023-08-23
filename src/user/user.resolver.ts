import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Profile, User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { GqlFastifyContext } from 'src/common/types/graphql.types';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.userService.create(createUserInput);
    }

    @Query(() => Profile, { name: 'user' })
    getUser(@Args('field') field: string, @Args('value') value: string) {
        try {
            return this.userService.findOneByField(field, value, {
                throwError: true,
                includeRelations: true,
            });
        } catch (error) {
            throw error;
        }
    }

    @Mutation(() => Profile)
    public async updateUser(
        @Args('values') values: UpdateUserInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        try {
            const session = await ctx.req.session.get('user');
            const user = await this.userService.update(session.id, values);
            ctx.req.session.set('user', user);
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
