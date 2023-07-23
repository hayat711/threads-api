import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { FastifyRequest } from 'fastify';

@Injectable()
export class SessionGuard implements CanActivate {
    constructor() {}

    async canActivate(context: ExecutionContext): Promise<any> {
        try {
            const ctx = GqlExecutionContext.create(context);
            const req: FastifyRequest = ctx.getContext().req;

            const userSession = req.session.get('user');

            if (!userSession) {
                throw new UnauthorizedException(
                    'You are not authorized to access this resource',
                );
            }

            return userSession;
        } catch (error) {
            throw new UnauthorizedException(
                'You are not authorized to access this resource',
            );
        }
    }
}
