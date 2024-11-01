import { sql } from './db.js'

sql`
  CREATE TABLE loja (
      id text PRIMARY KEY,
      name character varying(255),
      local character varying(255),
      proprietario character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})