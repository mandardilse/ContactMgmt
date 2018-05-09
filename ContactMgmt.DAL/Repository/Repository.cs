using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace ContactMgmt.DAL.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly IUnitOfWork uow;
        public Repository(IUnitOfWork _uow)
        {
            uow = _uow;
        }
        public bool Add(T entity)
        {
            uow.Context.Add(entity)
        }

        public bool Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public bool Edit(T entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> FindBy(Expression<Func<T, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save()
        {
            throw new NotImplementedException();
        }

        public bool Update(string Id)
        {
            throw new NotImplementedException();
        }
    }
}