FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR /app

COPY Production .

EXPOSE 5000

CMD ["dotnet", "SpaWithApiOnSameDomain.dll"]


