import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listFuncionarios() {
    const Funcionarios = await sql`select * from Funcionarios`;
    return Funcionarios;
  }

  async createFuncionarios(Funcionarios) {
    const matricula = randomUUID();
    console.log('matricula', matricula);
    const name = Funcionarios.name;
    const senha = Funcionarios.senha;
    
    await sql`insert into Funcionarios (matricula, name, senha)
    values (${matricula}, ${name}, ${senha})`
  }

  async updateFuncionarios(matricula, Funcionarios) {
    const name = Funcionarios.name;
    const senha = Funcionarios.senha;

    await sql`update Funcionarios set 
        name = ${name},
        senha = ${senha}
        where matricula = ${matricula}
    `;
}

  async deleteFuncionarios(matricula) {
    await sql`delete from Funcionarios where matricula = ${matricula}`
  }

}