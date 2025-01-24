﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Controllers{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController: ControllerBase{

        private readonly IRepositorio repositorio;
        private readonly ServicioTransient transient1;
        private readonly ServicioTransient transient2;
        private readonly ServicioScoped scoped1;
        private readonly ServicioScoped scoped2;
        private readonly ServicioSingleton singleton;

        public GenerosController(IRepositorio repositorio,
        ServicioTransient transient1,
        ServicioTransient transient2,
        ServicioScoped scoped1,
        ServicioScoped scoped2,
        ServicioSingleton singleton
        )
        {
            this.repositorio = repositorio;
            this.transient1 = transient1;
            this.transient2 = transient2;
            this.scoped1 = scoped1;
            this.scoped2 = scoped2;
            this.singleton = singleton;
        }

        [HttpGet("servicios-tiempos-de-vida")]
        public IActionResult GetServicioTiemposDeVida()
        {
            return Ok(new {
                Transients = new {transient1 = transient1.ObtenerId, transient2 = transient2.ObtenerId},
                Scopeds = new {scoped1 = scoped1.ObtenerId, scoped2 = scoped2.ObtenerId},
                Singleton = singleton.ObtenerId
            });
        }

        [HttpGet]
        public List<Genero> Get()
        {
            var generos = repositorio.ObtenerTodosLosGeneros();
            return generos;
        }

        [HttpGet ("{id:int}")]
        [OutputCache]
        public async Task<ActionResult<Genero>> Get(int id)
        {
            var genero = await repositorio.ObtenerPorId(id);

            if(genero is null){
                return NotFound();
            }

            return genero;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Genero genero)
        {
           var yaExisteUnGeneroConDichoNombre = repositorio.Existe(genero.Nombre);

           if(yaExisteUnGeneroConDichoNombre)
           {
            return BadRequest($"Ya existe un género con el nombre {genero.Nombre}");
           }

           return Ok();
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