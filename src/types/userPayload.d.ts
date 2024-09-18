import { IUsuario } from "./usuario";

export interface IUserPayload {
  usuarioId: string;
  primerNombre: string;
  primerApellido: string;
  dni: string;
  rol: string;
  iat: number;
  exp: number;
}
