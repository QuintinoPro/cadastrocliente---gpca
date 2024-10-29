import sqlite3 from "sqlite3";

export const db = new sqlite3.Database('C:/Users/Lucas Quintino/Documents/CADASTRO-CLIENTES - PROJETO GPCA/db.db', (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados SQLite:", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});