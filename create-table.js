import { sql } from './db.js'

sql`
CREATE TABLE EntradaSaida (
  idEntradaSaida INT PRIMARY KEY,
  Horario TIME,
  data DATE,
  name VARCHAR(255)
);

CREATE TABLE Funcionarios (
  matricula text PRIMARY KEY,
  name VARCHAR(255),
  senha VARCHAR(255)
);
`.then(() => {
  console.log('tabela criada');
})