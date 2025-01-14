const express = require('express')
const articleController = require('../controllers/articles')

const router = express.Router()

router.get('/', articleController.getAllArtcles)
router.get('/article/:slug', articleController.getArticleBySlug)

module.exports = router