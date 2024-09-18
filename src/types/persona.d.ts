export interface IPersona {
  PersonaId: number;
  PrimerNombre: string;
  SegundoNombre?: string;
  PrimerApellido: string;
  SegundoApellido?: string;
  Dni: string;
  Telefono?: string;
  Direccion?: string;
  FechaNacimiento?: Date;
  CreateAt?: Date;
  UpdateAt?: Date;
}
