var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSpaStaticFiles(opts =>
{
    opts.RootPath = "dist";
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.Urls.Add("http://0.0.0.0:5000");

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.UseSpaStaticFiles();

app.UseSpa(spaBuilder =>
{
    if (app.Environment.IsDevelopment())
    {
        spaBuilder.UseProxyToSpaDevelopmentServer("https://localhost:3000");
    }
});

/*
app.MapControllers();
*/

app.Run();