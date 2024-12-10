import { pool } from "../db.js"

export const ping = async (req, res) => {
    try {
        const result = await pool.query('SELECT "pong" AS result')
        res.json(result)
    } catch (error) {
        res.status(404).json({ mensaje: "error inesperado" })

    }
}

