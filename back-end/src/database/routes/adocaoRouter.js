const express = require('express');
const { createAdocao, getAdocoes } = require('../controllers/adocao');

const router = express.Router();


router.get('/', getAdocoes);
router.post('/', createAdocao);

module.exports = router;