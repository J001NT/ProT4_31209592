import {pool} from './database.js';

class LibroController{
     
    async getAll(req, res) {
        try {
        const [result] = await pool.query('SELECT * FROM Libros');
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
    }

    async getOne(req, res) {
        const { id } = req.params;
        try {
            const [result] = await pool.query('SELECT * FROM Libros WHERE id = ?', [id]);
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).send('Libro no encontrado');
            }
        } catch (err) {
            console.error(err);
            res.status(500).send('Error en el servidor');
        }
    }

     // Agregar un nuevo libro
  async add(req, res) {
    const { nombre, autor, categoria, año_publicacion, ISBN } = req.body;
    try {
      const [result] = await pool.query(
        'INSERT INTO Libros (nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)',
        [nombre, autor, categoria, año_publicacion, ISBN]
      );
      res.status(201).json({ "Id insertado": result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    }
  }
}

export const libro = new LibroController();