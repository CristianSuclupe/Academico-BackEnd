import { Request, Response } from "express";
import { HttpResponse } from "../utils/httpResponse";
import { JwtService } from "./../services/jwt";
import { UsuarioService } from "../services";
import bcrypt from "bcrypt";

export class AuthController {
  private readonly httpResponse = new HttpResponse();
  private readonly jwtService = new JwtService();
  private readonly usuarioService = new UsuarioService();

  login = async (req: Request, res: Response) => {
    const { user, password, rol } = req.body;
    if (!rol)
      return this.httpResponse.BadRequest(res, "Tipo de usuario invalido");
    try {
      const userSearched = await this.usuarioService.findUser(user, rol);
      const passwordExist =
        userSearched && userSearched.Contrasena
          ? await bcrypt.compareSync(password, userSearched.Contrasena)
          : false;
      if (!userSearched || !passwordExist)
        return this.httpResponse.NotFound(
          res,
          "Usuario o contraseña incorrecta"
        );
      const token = this.jwtService.createToken(userSearched);
      return this.httpResponse.Ok(res, token);
    } catch (error) {
      return this.httpResponse.InternalServerError(res, "No data");
    }
  };
}
