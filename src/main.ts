import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { UserInputError } from '@nestjs/apollo';
import { processRequest } from 'graphql-upload-minimal';

export async function bootstrap(): Promise<NestFastifyApplication> {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );
    const configService = app.get<ConfigService>(ConfigService);
    const reflector = app.get(Reflector);

    app.enableCors({
        credentials: true,
        origin: configService.get('FRONTEND_URL'),
        optionsSuccessStatus: 200,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    });

    // format the request body to follow graphql-upload's
    await app
        .getHttpAdapter()
        .getInstance()
        .addContentTypeParser('multipart', (request, payload, done) => {
            request.isMultipart = true;
            done();
        });

    await app
        .getHttpAdapter()
        .getInstance()
        .addHook('preValidation', async function (request, reply) {
            if (!request.isMultipart) {
                return;
            }
            request.body = await processRequest(request.raw, reply.raw, {
                maxFileSize: 50000000,
                maxFiles: 10,
            });
        });
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            stopAtFirstError: false,
            exceptionFactory: (errors: ValidationError[]) => {
                const result = {};

                errors.forEach((error) => {
                    const constraints = Object.values(error.constraints);
                    result[error.property] = constraints[0];
                });

                throw new UserInputError('VALIDATION_ERROR', {
                    extensions: {
                        statusCode: 400,
                        message: 'Input data validation failed',
                        errors: result,
                    },
                });
            },
        }),
    );

    const port = Number(configService.get('PORT') || 4000);
    await app.listen(port);

    return app;
}
void bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
});
