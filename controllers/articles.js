const db = require('../utils/db')

const getAllArtcles = (req, res) => {
    let sql = 'SELECT * FROM article'
    db.query(sql, (error, result) => {
        res.render('index', {
            articles: result
        })
    })
}

module.exports = {
    getAllArtcles,
    getArticleBySlug
}