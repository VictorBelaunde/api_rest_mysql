import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) { res.status(404).json({ mensaje: "error inesperado" }) }
}

export const getEmployee = async (req, res) => {
    const id = req.params.id

    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        if (rows.length <= 0) return res.status(404).json({ mensaje: "id no encontrado" }) //le agrego el estado 404 si es que no lo encuentra

        res.json(rows)
    } catch (error) {
        res.status(404).json({ mensaje: "error inesperado" })

    }
}

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUE (?, ?)',
            [name, salary])

        res.json(rows)

    } catch (error) {
        res.status(404).json({ mensaje: "error inesperado" })

    }
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.id
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id =?', [id])
        if (result.affectedRows <= 0) return res.status(404).json({
            mensaje: "empleado no encontrado"
        })

        res.sendStatus(204) //codigo 204 representa que todo salió bien y que no recibirá info como respuesta
    } catch (error) {
        res.status(404).json({ mensaje: "error inesperado" })

    }
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params // es lo mismo que "const id = req.params.id"
    const { name, salary } = req.body // recupero del body solo estos 2 datos

    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary =IFNULL(?, salary) WHERE id =?',
            [name, salary, id])
        //utilizo la funcion IFNULL para que mantenga el valor en caso de no recibir este dato por body

        if (result.affectedRows <= 0) return res.status(404).json({
            mensaje: "empleado no encontrado"
        })

        //hago un select solo para responder con los datos actualizados
        const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id])
        res.json(rows[0])
    } catch (error) {
        res.status(404).json({ mensaje: "error inesperado" })

    }
}


