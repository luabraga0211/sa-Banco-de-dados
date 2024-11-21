import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 

  // CRUD DOS FUNCIONARIOS
  async listFuncionarios() {
    const funcionarios = await sql`SELECT * FROM Funcionarios`;
    return funcionarios;
  }

  async createFuncionarios(funcionario) {
    const matricula = randomUUID();
    const { name, senha } = funcionario;

    await sql`INSERT INTO Funcionarios (matricula, name, senha)
    VALUES (${matricula}, ${name}, ${senha})`;

    // Registrar a entrada ao criar o funcionário
    await this.createEntradaSaida({ name, tipo: 'entrada' });
  }

  async updateFuncionarios(matricula, funcionario) {
    const { name, senha } = funcionario;

    await sql`UPDATE Funcionarios SET 
        name = ${name},
        senha = ${senha}
        WHERE matricula = ${matricula}
    `;
  }

  async deleteFuncionarios(matricula) {
    await sql`DELETE FROM Funcionarios WHERE matricula = ${matricula}`;
  }

  // CRUD DE ENTRADA E SAIDA
  async listEntradaSaida() {
    const entradaSaida = await sql`SELECT * FROM EntradaSaida`;
    return entradaSaida;
  }

  async createEntradaSaida(entradaSaida) {
    const idEntradaSaida = randomUUID();
    const { name, tipo } = entradaSaida;

    await sql`INSERT INTO EntradaSaida (idEntradaSaida, data, name, tipo)
    VALUES (${idEntradaSaida}, DEFAULT, ${name}, ${tipo})`;
  }

  async updateEntradaSaida(idEntradaSaida, entradaSaida) {
    const { name, tipo } = entradaSaida;

    await sql`UPDATE EntradaSaida SET 
        name = ${name},
        tipo = ${tipo}
        WHERE idEntradaSaida = ${idEntradaSaida}
    `;
  }

  async deleteEntradaSaida(idEntradaSaida) {
    await sql`DELETE FROM EntradaSaida WHERE idEntradaSaida = ${idEntradaSaida}`;
  }

  async getEntradaSaidaByFuncionario(name) {
    const result = await sql`SELECT * FROM EntradaSaida WHERE name = ${name}`;
    return result;
  }
}