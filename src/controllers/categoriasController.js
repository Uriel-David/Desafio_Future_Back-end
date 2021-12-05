const database = require('../config/database');
const models = require('../models/model');

module.exports = {

    async getCategoria(req, res) {

        try {
            const categorias = await models.Categoria.findAll();
            return res.status(200).send(categorias);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async postCategoria(req, res) {

        const { categoria } = req.body;
        try {
            const categorias = await models.Categoria.create({categoria});
            return res.status(200).send(categorias);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async putCategoria(req, res) {

        const { id } = req.params;
        const { categoria } = req.body;
        try {
            const categorias = await models.Categoria.findByPk(id);
            await categorias.set({
                categoria,
            });
            await categorias.save();
            return res.status(200).send(categorias);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async deleteCategoria(req, res) {

        const { id } = req.params;
        try {
            const categorias = await models.Categoria.findByPk(id);
            await categorias.destroy();
            return res.status(200).send(categorias);
        } catch (error) {
            res.status(400).send(error);
        }
    },

}
