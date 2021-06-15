using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GamesWebApi.Models;
using GamesWebApi.Persistence;

namespace GamesWebApi.Controllers
{
    [ApiController]
    [Route("v1/games")]
    public class GamesController : ControllerBase
    {
        //Obter lista de games cadastrados
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Game>>> Get([FromServices] GameWebApiContext context)
        {
            var games = await context.Games.ToListAsync();
            return Ok(games);
        }

        //Cadastrar game
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Game>> Post([FromServices] GameWebApiContext context, [FromBody]Game game)
        {
            if (ModelState.IsValid)
            {
                context.Games.Add(game);
                await context.SaveChangesAsync();
                return game;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
