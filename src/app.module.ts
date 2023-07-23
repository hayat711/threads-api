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
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
