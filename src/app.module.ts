import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ThreadModule } from './thread/thread.module';
import { ReplyModule } from './reply/reply.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { NotificationModule } from './notification/notification.module';
import { LikeModule } from './like/like.module';
import { FollowModule } from './follow/follow.module';

@Module({
    imports: [
        PrismaModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthModule,
        UserModule,
        ThreadModule,
        ReplyModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            //@ts-ignore
            cors: {
                credentials: true,
                origin: true,
            },
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
            buildSchemaOptions: {
                dateScalarMode: 'isoDate',
            },
            autoTransformHttpErrors: false,
            includeStacktraceInErrorResponses: false,
            formatError: (error: GraphQLError) => {
                const graphQLFormattedError: GraphQLFormattedError = {
                    //@ts-ignore
                    message:
                        error.extensions?.message ||
                        error.message ||
                        'Internal server error',
                    statusCode:
                        error.extensions?.statusCode ||
                        error.extensions.code ||
                        500,
                    errors: error.extensions?.errors || {},
                };
                return graphQLFormattedError;
            },
            introspection: true,
            playground: true,
            csrfPrevention: false,
        }),
        NotificationModule,
        LikeModule,
        FollowModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
