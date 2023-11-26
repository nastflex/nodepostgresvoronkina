const db = require('../db')

class UserController {
    async createUser(req, res){
        const {moviename, movieyear} = req.body
        const newMovie = await db.query('INSERT INTO movie (moviename, movieyear) values ($1, $2) RETURNING *', [moviename, movieyear])
        res.json(newMovie.rows[0])
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM movie')
        res.json(users.rows)
    }
    async getOneUser(req, res){
        const users = await db.query('SELECT * FROM movie where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()