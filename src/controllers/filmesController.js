const database = require('../config/database');
const models = require('../models/model');

module.exports = {

    async getFilme(req, res) {

        try {
            const filmes = await models.Filme.findAll({
                include: [
                    {
                        model: models.Categoria,
                        through: { attributes: [] },
                    }
                ]
            });
            return res.status(200).send(filmes);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async getFilmeCategoria(req, res) {

        try {
            const { CategoriaId } = req.params;
            const filmes = await models.Filme.findAll({
                include: [
                    {
                        model: models.Categoria,
                        through: { attributes: [] },
                        where: {
                            id: CategoriaId,
                        },
                    }
                ]
            });
            return res.status(200).send(filmes);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async getFilmeGenero(req, res) {

        try {
            const { genero } = req.params;
            const filmes = await models.Filme.findAll({
                where: {
                    genero: genero,
                },
                include: [
                    {
                        model: models.Categoria,
                        through: { attributes: [] },
                    }
                ]
            });
            return res.status(200).send(filmes);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async postFilme(req, res) {
        try {
            const {categoria, ...data} = req.body;

            const filmes = await models.Filme.create(data);
            if(categoria && categoria.length > 0) {
                filmes.setCategorias(categoria);
            }
            return res.status(200).send(filmes);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async putFilme(req, res) {
        try {
            const { id } = req.params;
            const { categoria, ...data } = req.body;

            const filmes = await models.Filme.findByPk(id);
            filmes.update(data);

            if(categoria && categoria.length > 0) {
                filmes.setCategorias(categoria);
            }

            return res.status(200).send(filmes);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async deleteFilme(req, res) {
        try {
            const { id } = req.params;
            const filmes = await models.Filme.findByPk(id);
            await filmes.destroy();
            return res.status(200).send(filmes);
        } catch (error) {
            res.status(400).send(error);
        }
    },

}
