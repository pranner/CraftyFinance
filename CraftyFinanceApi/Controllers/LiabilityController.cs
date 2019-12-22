using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CraftyFinanceApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LiabilityController: ControllerBase
    {
        private static Liability Liabilities = new Liability
        {
            Mortgage1 = 3,
            Mortgage1Interest = 55,
            Mortgage2 = 300.5m,
            Mortgage2Interest = 20,
        };
        private readonly ILogger<LiabilityController> _logger;

        public LiabilityController(ILogger<LiabilityController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<Liability> Get()
        {
            return Ok(Liabilities);
        }
    }
}