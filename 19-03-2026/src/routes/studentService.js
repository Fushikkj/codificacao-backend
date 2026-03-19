import express, { Router } from 'express'
import { studentService } from '../service/user.service'
const routs = express.Router()


route.get("/",(req, res) => {
    const data = studentService.getAll()
     res.json(data)
})

export default routs
