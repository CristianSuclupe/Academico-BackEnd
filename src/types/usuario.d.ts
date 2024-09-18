import { IPersona } from "./persona";

export interface IUsuario extends IPersona {
  UsuarioId: string;
  Email?: string;
  Contrasena?: string;
  NombreRol: string;
  Anulado?: boolean;
}
