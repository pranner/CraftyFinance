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
    private readonly ILogger<AssetController> _logger;

    public AssetController(ILogger<AssetController> logger)
    {
      _logger = logger;
    }

    [HttpPost]
    public ActionResult<decimal> GetTotalAssets(Asset asset)
    {
      var assetTotals = asset.Chequing + asset.SavingsForTaxes + asset.RainyDayFund +
        asset.SavingsForFun + asset.SavingsForTravel + asset.SavingsForPersonalDevelopment +
        asset.Investment1 + asset.Investment2 + asset.Investment3 + asset.Investment4 +
        asset.Investment5 + asset.PrimaryHome + asset.SecondHome + asset.Other;
      return Ok(assetTotals);
    }
  }
}
