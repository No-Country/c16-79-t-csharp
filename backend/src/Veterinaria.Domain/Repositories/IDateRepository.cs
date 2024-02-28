﻿using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories;

public interface IDateRepository : IBasicRepository<Date, int>
{
    Task MetodoPersonalizadoAsync(Date model);
}