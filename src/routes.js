import { Router } from "express";
import { libro } from "./controller.js";

const router = Router()

router.get('/libros', libro.getAll);

router.get('/libros/:id', libro.getOne);

router.post('/libros', libro.add);

router.put('/libros/:id', libro.update);

router.delete('/libros/isbn/:isbn', libro.deleteByISBN);

export { router };