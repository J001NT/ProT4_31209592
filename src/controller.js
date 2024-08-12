import { pool } from "./database.js";

class LibroController {
  //Obtener todos los libros
  async getAll(req, res) {
    try {
      const [result] = await pool.query("SELECT * FROM Libros");
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error en el servidor");
    }
    //Obtener un libro por su id
  }
  async getOne(req, res) {
    const { id } = req.params;
    try {
      const [result] = await pool.query("SELECT * FROM Libros WHERE id = ?", [
        id,
      ]);
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).send("Libro no encontrado");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error en el servidor");
    }
  }

  // Crear un nuevo libro
  async add(req, res) {
    const { nombre, autor, categoria, año_publicacion, ISBN } = req.body;
    try {
      const [result] = await pool.query(
        "INSERT INTO Libros (nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)",
        [nombre, autor, categoria, año_publicacion, ISBN]
      );
      res.status(201).json({ "Id insertado": result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error en el servidor");
    }
  }

  // Actualizar un libro por id
  async update(req, res) {
    const { id } = req.params;
    const { nombre, autor, categoria, año_publicacion, ISBN } = req.body;
    try {
      const [result] = await pool.query(
        `UPDATE Libros SET nombre = ?, autor = ?, categoria = ?, año_publicacion = ?, ISBN = ? WHERE id = ?`,
        [nombre, autor, categoria, año_publicacion, ISBN, id]
      );
      if (result.affectedRows > 0) {
        res.json({ message: "Libro actualizado correctamente" });
      } else {
        res.status(404).send("Libro no encontrado");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error en el servidor");
    }
  }

  // Eliminar un libro por su ISBN
  async deleteByISBN(req, res) {
    const { isbn } = req.params;
    try {
      const [result] = await pool.query('DELETE FROM Libros WHERE ISBN = ?', [isbn]);
      if (result.affectedRows > 0) {
        res.json({ message: 'Libro eliminado correctamente' });
      } else {
        res.status(404).send('Libro no encontrado');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    }
  }

}

export const libro = new LibroController();
