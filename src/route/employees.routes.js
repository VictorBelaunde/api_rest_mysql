import { Router } from "express";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from "../controllers/employees.controller.js";
const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee)

router.patch('/employees/:id', updateEmployee) //para permitir actualizar todos o algunos datos

router.delete('/employees/:id', deleteEmployee)

export default router

