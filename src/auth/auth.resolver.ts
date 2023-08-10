import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { AuthResult, CredentialsInput, MeResult } from './dto/create-auth.input';
import { GqlFastifyContext } from 'src/common/types/graphql.types';
import { Session, UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/common/guards/auth.guard';
import * as secureSession from '@fastify/secure-session';

@Resolver('Auth')
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => AuthResult)
    public async register(
        @Args('createUserInput') createUserInput: CreateUserInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        const result = await this.authService.register(createUserInput);
        ctx.req.session.set('user', result.profile);
        return result;
    }

    @Mutation(() => AuthResult)
    public async login(
        @Args('credentialsInput') credentialsInput: CredentialsInput,
        @Context() ctx: GqlFastifyContext,
    ) {
        console.log('login called');
        const result = await this.authService.login(credentialsInput);
        ctx.req.session.set('user', result.profile);
        return result;
    }

    @UseGuards(SessionGuard)
    @Query(() => MeResult)
    public async me(@Context() ctx: GqlFastifyContext,
        @Session() session: secureSession.Session
    ) {
        const profile = await this.authService.serializeSession(
            ctx.req.session.get('user'),
        );

        return {
            statusCode: 200,
            message: 'Your profile',
            profile,
        };
    }

    // @UseGuards(SessionGuard)
    @Mutation(() => AuthResult)
    public async logout(@Context() ctx: GqlFastifyContext) {
        ctx.req.session.delete();

        return {
            statusCode: 200,
            message: 'You have been logged out',
            profile: null,
        };
    }
}
