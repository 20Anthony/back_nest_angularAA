import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // 👈 importa el JwtModule
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: "MI CODIGO SECRETO", // 👈 puedes usar process.env.JWT_SECRET si tienes variables de entorno
      signOptions: { expiresIn: '60S' },  // el token expira en 1 hora
    }),
     TypeOrmModule.forFeature([User])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

