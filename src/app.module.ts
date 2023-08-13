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
import { UploaderModule } from './uploader/uploader.module';
import { NotificationModule } from './notification/notification.module';
import { LikeModule } from './like/like.module';
import { FollowModule } from './follow/follow.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

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
        UploaderModule,
        NotificationModule,
        LikeModule,
        FollowModule,
        CloudinaryModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
