import { Brackets } from "typeorm";
import { Usuario } from "../entities";
import { IUsuario } from "../types";
import { IUsuarioService } from "./interfaces/IUsuarioService";

export class UsuarioService implements IUsuarioService {
  findUser = async (user: string, rolId: number): Promise<IUsuario | null> => {
    console.log("en el service de usuario");
    try {
      const userFound = await Usuario.getRepository()
        .createQueryBuilder("usuario")
        .innerJoinAndSelect("usuario.Persona", "persona")
        .innerJoinAndSelect("usuario.Rol", "rol")
        .where("rol.RolId = :rolId", { rolId })
        .andWhere(
          new Brackets((qb) => {
            qb.where("usuario.Email = :user", { user }).orWhere(
              "persona.Dni = :user",
              { user }
            );
          })
        )
        .andWhere("usuario.Anulado = 0")
        .select([
          "usuario.UsuarioId AS UsuarioId",
          "persona.PrimerNombre AS PrimerNombre",
          "persona.PrimerApellido AS PrimerApellido",
          "persona.Dni AS Dni",
          "rol.NombreRol AS NombreRol",
          "usuario.Contrasena AS Contrasena",
        ])
        .getRawOne();
      return userFound;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("Error desconocido");
      }
    }
  };
}
