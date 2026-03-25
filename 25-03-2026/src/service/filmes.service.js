import express from 'express'


const filmes = [
    { id: 1, filme: "carros 3", ano: 2017 },
    { id: 2, filme: "nada de novo no front", ano: 2022 },
    { id: 3, filme: "bastardos em glórios", ano: 2009}
];


class filmesService {
    getAll(){
        return filmes;
    }
    getById(){
        return filmes(id);
    }
    getByIdade(){
        return filmes(ano)
    }
}
export const filmesService = new FilmesService();