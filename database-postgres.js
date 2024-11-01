import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listLoja() {
    const loja = await sql`select * from loja`;
    return loja;
  }

  async createLoja(loja) {
    const id = randomUUID();
    console.log('id', id);
    const name = loja.name;
    const local = loja.local;
    const proprietario = loja.proprietario;
    
    await sql`insert into loja (id, name, local, proprietario)
    values (${id}, ${name}, ${local}, ${proprietario})`
  }

  async updateLoja(id, loja) {
    const name = loja.name;
    const local = loja.local;
    const proprietario = loja.proprietario;

    await sql`update loja set 
        name = ${name},
        local = ${local},
        proprietario = ${proprietario}
        where id = ${id}
    `;
  }

  async deleteLoja(id) {
    await sql`delete from loja where id = ${id}`
  }

}