// Requires para funcionamento do controller de categorias
const database = require('../config/database');
const models = require('../models/model');

// Exportação dos controllers responsáveis pelas funcionalidades da rota categoria
module.exports = {

    // Função para recuperar as categorias da base de dados
    async getCategoria(req, res) {

        try {
            const categorias = await models.Categoria.findAll();
            return res.status(200).send(categorias);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Função para gravar as categorias da base de dados
    async postCategoria(req, res) {

        const { categoria } = req.body;
        try {
            const categorias = await models.Categoria.create({categoria});
            return res.status(200).send(categorias);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Função para atualizar as categorias da base de dados
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

    // Função para deletar as categorias da base de dados
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
