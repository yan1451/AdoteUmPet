const { adocaos, pets } = require('../models');

const createAdocao = async (req, res) => {

  const create = await adocaos.create(req.body);
  res.status(201).json(create);
};

const getAdocoes = async (req, res) => {
  const getAll = await adocaos.findAll({
    include: [{
      model: pets, as: 'pets'
    }]
  });
  res.status(200).json(getAll);
}

module.exports = {
  createAdocao,
  getAdocoes
}