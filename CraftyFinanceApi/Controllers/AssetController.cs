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
    public class AssetController : ControllerBase
    {
        private static Asset Assets = new Asset
        {
            Chequing = 3,
            ChequingInterest = 55,
            TaxSaving = 300.5m,
            TaxSavingInterest = 20,
            RainyFund = 5,
            RainyFundInterest = 5,
            FunSaving = 20,
            FunSavingInterest = 20,
            TravelSaving = 565,
            TravelSavingInterest = 1.3m,
            PersonalDevSaving = 42,
            PersonalDevSavingInterest = 0.5m,
            Investment1 = 8000,
            Investment1Interest = 2.5m,
            Investment2 = 500,
            Investment2Interest = 1.01m,
        };
        private readonly ILogger<AssetController> _logger;

        public AssetController(ILogger<AssetController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<Asset> Get()
        {
            return Ok(Assets);
        }
    }
}
