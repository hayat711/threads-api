import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ThreadModule } from './thread/thread.module';
import { ReplyModule } from './reply/reply.module';

@Module({
    imports: [PrismaModule, ConfigModule, AuthModule, UserModule, ThreadModule, ReplyModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
