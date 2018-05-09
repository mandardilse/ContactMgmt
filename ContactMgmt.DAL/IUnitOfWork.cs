using System;

namespace ContactMgmt.DAL
{
    public interface IUnitOfWork : IDisposable
    {
         IDbContext Context {get; set;}
         void Commit();
    }
}