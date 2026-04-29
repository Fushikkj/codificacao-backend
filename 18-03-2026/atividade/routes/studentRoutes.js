import express, { Router } from 'express'
const routs = express.Router()

route.get("/",(req, res) => {
    res.json(studentService.getAll())
})
  