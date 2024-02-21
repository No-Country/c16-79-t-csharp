FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /source

COPY *.sln .
COPY src/Veterinaria.Application/*.csproj src/Veterinaria.Application/
COPY src/Veterinaria.Domain/*.csproj src/Veterinaria.Domain/
COPY src/Veterinaria.Infrastructure/*.csproj src/Veterinaria.Infrastructure/
COPY WebApi/*.csproj WebApi/
COPY test test

RUN dotnet resture

COPY . .

RUN dotnet publish WebApi/WebApi.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app

COPY --from=build /source/out .

EXPOSE 80
EXPOSE 8080

CMD [ "dotnet","WebApi.dll" ]

