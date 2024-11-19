import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 

  // CRUD DOS FUNCIONARIOS
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

  // CRUD DE ENTRADA E SAIDA

  // SELECIONA TODOS OS VALORES DA TABELA PARA RETORNAREM NA TELA 

  async listEntradaSaida() {
    const EntradaSaida = await sql`select * from entradasaida`;
    return EntradaSaida;
  }
  // CRIA UMA NOVA ENTRADA DE ENTRADA E SAIDA COM CREATE
  async createEntradaSaida(EntradaSaida) {
    const idEntradaSaida = randomUUID();
    const { date, name } = EntradaSaida;    
    console.log('id', idEntradaSaida);

    const data = new Date(date);

    
    // COLOCA OS DADOS ESCOLHIDOS NA TABELA COMO AS VARIAVEIS SELECIONADAS
    await sql`INSERT INTO entradasaida (idEntradaSaida, data, name)
    values (${idEntradaSaida}, ${data}, ${name})`
  }

    // FUNÇÃO DE UPDATE DE ENTRADA E SAIDA DO CODIGO
  async updateEntradaSaida(idEntradaSaida, EntradaSaida) {
    const name = EntradaSaida.name;
    const data = EntradaSaida.date;
    // ATUALIZA OS DADOS QUE ESTAO SALVOS NAS VARIAVEIS PELOS NOVOS
    await sql`update entradasaida set 
        name = ${name},
        data = ${data}
        where idEntradaSaida = ${idEntradaSaida}
    `;
}
  // FUNÇÃO DE DELETE DE ENTRADA E SAIDA DO CODIGO
  async deleteEntradaSaida(idEntradaSaida) {
    await sql`delete from entradasaida where idEntradaSaida = ${idEntradaSaida}`
  }

}