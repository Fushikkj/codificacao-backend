import express, { Router } from 'express'
import { studentService } from '../service/user.service'
const routs = express.Router()

route.get("/",(req, res) => {
    res.json(studentService.getAll())
})

export default routs
