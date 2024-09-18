import jwt from "jwt-simple";
import moment from "moment";
import config from "../config";
import { IUsuario, IUserPayload } from "../types";

export class JwtService {
  createToken = (user: IUsuario) => {
    const payload: IUserPayload = {
      usuarioId: user.UsuarioId,
      primerNombre: user.PrimerNombre,
      primerApellido: user.PrimerApellido,
      dni: user.Dni,
      rol: user.NombreRol,
      iat: moment().unix(),
      exp: moment().add(1, "days").unix(),
    };

    return jwt.encode(payload, config.secret);
  };

  decodeToken = (token: string) => {
    return jwt.decode(token, config.secret);
  };
}
