﻿using Microsoft.AspNetCore.Mvc;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Controllers{
    [Route("api/generos")]
    public class GenerosController{
        [HttpGet]
        public List<Genero> Get()
        {
            var repositorio = new RepositorioEnMemoria();
            var generos = repositorio.ObtenerTodosLosGeneros();
            return generos;
        }

        [HttpGet ("{id}")]
        public Genero? Get(int id)
        {
            var repositorio = new RepositorioEnMemoria();
            var genero = repositorio.ObtenerPorId(id);
            return genero;
        }

        [HttpPost]
        public void Post()
        {

        }

        [HttpPut]
        public void Put()
        {

        }
        [HttpDelete]
        public void Delete()
        {

        }
    }
}