import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM Cliente";

    db.all(q, (err,data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = "INSERT INTO Cliente(nome, cpf, email, data_nasc, ativo) VALUES (?, ?, ?, ?)";
  
    const values = [
      req.body.nome,
      req.body.cpf,
      req.body.email,
      req.body.data_nasc,
      req.body.ativo,
    ];
  
    db.run(q, values, function (err) {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };

  export const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET nome = ?, cpf = ?, email = ?, data_nasc = ?, ativo = ? WHERE id = ?";
  
    const values = [
      req.body.nome,
      req.body.cpf,
      req.body.email,
      req.body.data_nasc,
      req.body.ativo,
      req.params.id, 
    ];
  
    db.run(q, values, (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };

  export const deleteUser = (req, res) => {
    const q = "DELETE FROM Cliente WHERE id = ?";
  
    db.run(q, [req.params.id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      if (this.changes === 0) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }
  
      return res.status(200).json({ message: "Usuário deletado com sucesso." });
    });
  };
  
  