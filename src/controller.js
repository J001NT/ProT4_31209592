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
    const validKeys = ['nombre', 'autor', 'categoria', 'año_publicacion', 'ISBN'];
    const receivedKeys = Object.keys(req.body);

     // Validar que solo se envíen los campos permitidos
     const invalidKeys = receivedKeys.filter(key => !validKeys.includes(key));
     if (invalidKeys.length > 0) {
       return res.status(400).json({ error: `Atributos no válidos: ${invalidKeys.join(', ')}` });
     }
 
     // Validar que todos los campos obligatorios estén presentes
     if (!nombre || !autor || !categoria || !año_publicacion || !ISBN) {
       return res.status(400).json({ error: 'Faltan campos obligatorios' });
     }

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

      const [existingBook] = await pool.query('SELECT * FROM Libros WHERE id = ?', [id]);
      if (existingBook.length === 0) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      const [result] = await pool.query(
        `UPDATE Libros SET nombre = ?, autor = ?, categoria = ?, año_publicacion = ?, ISBN = ? WHERE id = ?`,
        [nombre, autor, categoria, año_publicacion, ISBN, id]
      );
        res.json({ message: "Libro actualizado correctamente" });
      } catch (err) {
      console.error(err);
      res.status(500).send("Error en el servidor");
    }
  }

  // Eliminar un libro por su ISBN
  async deleteByISBN(req, res) {
    const { isbn } = req.params;
    try {
      
      // Verificar si el libro existe antes de eliminar
      const [existingBook] = await pool.query('SELECT * FROM Libros WHERE ISBN = ?', [isbn]);
      if (existingBook.length === 0) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }
      
      const [result] = await pool.query('DELETE FROM Libros WHERE ISBN = ?', [isbn]);
      res.json({ message: 'Libro eliminado correctamente' });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    }
  }

}

export const libro = new LibroController();
