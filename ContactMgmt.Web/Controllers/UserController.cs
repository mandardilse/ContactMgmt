using Microsoft.AspNetCore.Mvc;
using ContactMgmt.Web.Models;
using System.Threading.Tasks;
using ContactMgmt.Entities;
using System.Collections.Generic;
using System.Linq;
namespace ContactMgmt.Web.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly ContactMgmtContext db;
        public UserController(ContactMgmtContext appContext)
        {
            db = appContext;
        }

        //[HttpGet]
        // public async Task<IEnumerable<IActionResult>> Get()
        // {
        //     return await db.Users.FindAsync<User>(filter:null);    
        // }
    }
}