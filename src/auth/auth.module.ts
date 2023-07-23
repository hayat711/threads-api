import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { SessionGuard } from 'src/common/guards/auth.guard';

@Module({
    imports: [UserModule],
    providers: [AuthResolver, AuthService, SessionGuard],
})
export class AuthModule {}
