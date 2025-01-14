const express = require('express')
const articleController = require('../controllers/articles')

const router = express.Router()

router.get('/', articleController.getAllArtcles)

module.exports = router