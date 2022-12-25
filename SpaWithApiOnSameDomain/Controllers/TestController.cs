using Microsoft.AspNetCore.Mvc;

namespace SpaWithApiOnSameDomain.Controllers;

[ApiController]
[Route("api/test")]
public class TestController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("This is data from the API");
    }
}