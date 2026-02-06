import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Onde buscar o token? No Header 'Authorization: Bearer <token>'
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // O token expirou? Se sim, nega o acesso.
      ignoreExpiration: false,

      // A senha secreta (TEM QUE SER IGUAL À DO AUTH MODULE)
      secretOrKey: 'SENHA_SECRETA123',
    });
  }

  async validate(payload: any) {
    // Essa função roda depois que o token já foi verificado.
    // O que retornarmos aqui vai para dentro de "req.user" nas rotas.
    return { userId: payload.sub, username: payload.username };
  }
}
