import express from 'express'

const alunos  =[
    {id:1, nome: 'ronaldo', idade: '20' },
    {id:2, nome: 'fernado', idade: '18' }
]

class AlunosService {
    getAll(){
        return alunos;
    }
    getById(){
        return alunos(id);
    }
    getByIdade(){
        return alunos(nome)
    }
}


export const studentService = new StudentService();