const express = require('express');
const { findPets } = require('../controllers/pets');

const router = express.Router();

router.get('/', findPets);

module.exports = router;