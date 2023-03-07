using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSpaStaticFiles(opts => { opts.RootPath = "dist"; });

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opts =>
{
    opts.Authority = "https://dev-wo5np8pa74qkv8lk.us.auth0.com/";
    opts.Audience = "https://todos";

    opts.TokenValidationParameters = new TokenValidationParameters
    {
        NameClaimType = ClaimTypes.NameIdentifier
    };
});

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

// We need this when working with a docker container.
// The docker container will run the application in http until you
// manage to get a local ssl cert.
// Hosting provider should take care of the ssl. i.g: Railway or Render
if (!app.Environment.IsDevelopment()) app.Urls.Add("http://0.0.0.0:5000");


app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.UseSpaStaticFiles();

app.UseSpa(spaBuilder =>
{
    if (app.Environment.IsDevelopment()) spaBuilder.UseProxyToSpaDevelopmentServer("https://localhost:3000");
});

/*
app.MapControllers();
*/

app.Run();
