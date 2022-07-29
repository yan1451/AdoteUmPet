const { pets } = require('../models');

const findPets = async (req, res) => {

  const response = await pets.findAll();
  res.status(200).json(response);
  
};

module.exports = {
  findPets,
}