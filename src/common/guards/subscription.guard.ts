import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class SubscriptionGuard extends AuthGuard('session') {
    getRequest<T = any>(context: ExecutionContext): T {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}