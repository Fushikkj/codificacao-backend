import express, { Router } from 'express'
import { filmesService } from '../service/filmes.service'
const routs = express.Router()


router.get('/', (req, res) => {
    const filmes = filmesService.getAll();
    res.json(filmes);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filme = filmesService.getById(id);

    if (!filme) {
        return res.status(404).json({ mensagem: 'ta sem filme eim' });
    }

    res.json(filme);
});
export default routs
