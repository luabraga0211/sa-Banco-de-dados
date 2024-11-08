import { sql } from './db.js'

sql`
CREATE TABLE EntradaSaida (
  idEntradaSaida text PRIMARY KEY,
  data DATE,
  name VARCHAR(255)
);


`.then(() => {
  console.log('tabela criada');
})

sql`
CREATE TABLE Funcionarios (
  matricula text PRIMARY KEY,
  name VARCHAR(255),
  senha VARCHAR(255)
);


`.then(() => {
  console.log('tabela criada');
})


