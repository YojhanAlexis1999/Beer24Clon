const router = require('express').Router();
const database = require('../database');

router.get('/categorias/:localizacion', async (req,res) => {
    try {
        const { localizacion } = req.params
        const categorias = await database.query("SELECT c.img, c.descripcion FROM categorias_local cl, categorias c WHERE c.id_categorias = cl.id_categoria AND cl.id_loca = ?", [localizacion])
        res.status(200).json(categorias)
    } catch (error) {
        res.status(401).json({ error })
    }
})

module.exports = router;