import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // Injeta o Service no construtor
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local')) // O Guarda confere a senha antes de entrar
  @Post('login')
  async login(@Request() req) {
    // Se chegou aqui, a senha está certa!
    // O usuário validado já vem dentro de req.user
    return this.authService.login(req.user);
  }
}
