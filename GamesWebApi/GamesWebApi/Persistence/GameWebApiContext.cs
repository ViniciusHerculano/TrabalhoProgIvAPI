using Microsoft.EntityFrameworkCore;
using GamesWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamesWebApi.Persistence
{
    public class GameWebApiContext : DbContext
    {
        public GameWebApiContext(DbContextOptions<GameWebApiContext> options) : base (options)
        {

        }

        public DbSet <Game> Games { get; set; }
    }
}
