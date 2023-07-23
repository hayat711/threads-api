import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { AuthResult, CredentialsInput } from './dto/create-auth.input';
import { GqlFastifyContext } from 'src/common/types/graphql.types';

@Resolver('Auth')
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => AuthResult)
    async register(
        @Args('createUserInput') createUserInput: CreateUserInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        const result = await this.authService.register(createUserInput);
        ctx.req.session.set('user', result.profile);

        return result;

    }

    @Mutation(() => Auth)
    login(@Args('credentialsInput') credentialsInput: CredentialsInput) {
        return this.authService.login(credentialsInput);
    }
}
