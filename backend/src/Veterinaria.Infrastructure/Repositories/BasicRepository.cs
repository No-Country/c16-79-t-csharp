using Microsoft.EntityFrameworkCore;
using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Repositories;

namespace Veterinaria.Infrastructure.Repository;

public class BasicRepository<TModel, TypeId> : IBasicRepository<TModel, TypeId> where TModel : class
{
    private readonly DbContext _context;
    public BasicRepository(DbContext dbContext)
    {
        _context = dbContext;
    }
    virtual public async Task<TModel> Add(TModel model)
    {
        try
        {
            _context.Set<TModel>().Add(model).State = EntityState.Added;
            await _context.SaveChangesAsync();
            return model;
        }
        catch (Exception ex)
        {
            throw new DBSaveChangesException($"Resource could not be saved: {nameof(TModel)} ", ex);
        }
    }

    virtual public async Task Delete(TModel model)
    {
        try
        {
            _context.Set<TModel>().Remove(model).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            throw new DBSaveChangesException($"Resource could not be removed: {nameof(TModel)} ", ex);
        };
    }

    virtual public async Task<List<TModel>> GetAll()
    {
        return await _context.Set<TModel>().ToListAsync();
    }

    virtual public async Task<TModel?> GetById(TypeId id)
    {
        return await _context.Set<TModel>().FindAsync(id);
    }

    virtual public async Task<TModel> Update(TModel model)
    {
        try
        {
            _context.Set<TModel>().Update(model).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return model;
        }
        catch (Exception ex)
        {
            throw new DBSaveChangesException($"Resource could not be updated: {nameof(TModel)} ", ex);
        }
    }
}