import { IUsuario } from "../../types";

export interface IUsuarioService {
  findUser(user: string, rolId: number): Promise<IUsuario | null>;
}
