using Microsoft.EntityFrameworkCore;
using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories;

public class BasicRepository<TModel, TypeId> : IBasicRepository<TModel, TypeId> where TModel : class
{
    private readonly DbContext _context;
    private VeterinariaDbContext context;

    public BasicRepository(DbContext dbContext)
    {
        _context = dbContext;
    }

    public BasicRepository(VeterinariaDbContext context)
    {
        this.context = context;
    }

    virtual public async Task<TModel> AddAsync(TModel model)
    {
        try
        {
            _context.Set<TModel>().Add(model).State = EntityState.Added;
            await _context.SaveChangesAsync();
            return model;
        }
        catch (Exception ex)
        {
            throw new DBSaveChangesException($"Resource could not be saved: {typeof(TModel).Name} ", ex);
        }
    }

    virtual public async Task DeleteAsync(TModel model)
    {
        try
        {
            _context.Set<TModel>().Remove(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            throw new DBSaveChangesException($"Resource could not be removed: {typeof(TModel).Name} ", ex);
        };
    }

    virtual public async Task<List<TModel>> FindAllAsync()
    {
        return await _context.Set<TModel>().ToListAsync();
    }

    virtual public async Task<TModel?> FindByIdAsync(TypeId id)
    {
        return await _context.Set<TModel>().FindAsync(id);
    }

    virtual public async Task<TModel> UpdateAsync(TModel model)
    {
        try
        {
            _context.Set<TModel>().Update(model).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return model;
        }
        catch (Exception ex)
        {
            throw new DBSaveChangesException($"Resource could not be updated: {typeof(TModel).Name} ", ex);
        }
    }
}