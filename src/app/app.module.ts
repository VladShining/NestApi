import { Module } from '@nestjs/common';
import { AuthModule } from 'src/authentification/auth.module';
import { ListModule } from 'src/shared/list.module';
import { UserModule } from 'src/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, UserModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
