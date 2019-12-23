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
  public class LiabilityController : ControllerBase
  {
    private readonly ILogger<LiabilityController> _logger;

    public LiabilityController(ILogger<LiabilityController> logger)
    {
      _logger = logger;
    }

    [HttpPost]
    public ActionResult<decimal> GetTotalLiabilities(Liability liability)
    {
      var liabilityTotals = liability.CreditCard1 + liability.CreditCard2 +
        liability.OtherCredit + liability.Mortgage1 + liability.Mortgage2 +
        liability.LineOfCredit + liability.InvestmentLoan +
        liability.StudentLoan + liability.CarLoan;
      return Ok(liabilityTotals);
    }
  }
}