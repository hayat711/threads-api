import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { FastifyRequest, FastifyReply } from 'fastify';
import { User } from 'src/user/entities/user.entity';

export interface GqlFastifyContext {
    req: FastifyRequest;
    reply: FastifyReply;
}

@ObjectType()
export class CursorPageInfo {
    @Field()
    hasPrevious: boolean;

    @Field()
    hasNext: boolean;

    @Field(() => String)
    previousCursor: string;

    @Field(() => String)
    nextCursor: string;
}

@ObjectType()
export class OffsetPageInfo {
    @Field(() => Int)
    currentPage: number;

    @Field(() => Int)
    totalPages: number;

    @Field(() => Int)
    totalCount: number;
}

@InputType()
export class CursorPaginationOptions {
    @Field()
    take: number;
    @Field()
    cursor: string;
    @Field()
    field: string;
    @Field()
    type: 'asc' | 'desc';
}

@InputType()
export class OffsetPaginationOptions {
    @Field()
    take: number;
    @Field()
    skip: number;
    @Field()
    field: string;
    @Field()
    type: 'asc' | 'desc';
}

@ObjectType()
export class CursorPaginatedUsers {
    @Field(() => [User], { nullable: true })
    edges?: User[];

    @Field(() => CursorPageInfo)
    pageInfo: CursorPageInfo;
}

