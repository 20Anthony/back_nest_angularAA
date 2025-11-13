import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private AuthServicee:AuthService){

    }

    @Post('register')
    registerUser(@Body()userObj : RegisterAuthDto){
         console.log('📦 Datos recibidos en register:', userObj);
        return userObj;
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto){
        console.log('📩 Datos recibidos en login:', credenciales);
        return this.AuthServicee.login(credenciales)

    }
}
