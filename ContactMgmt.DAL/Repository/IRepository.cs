using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace ContactMgmt.DAL.Repository
{
    public interface IRepository<T> where T: class
    {
         IEnumerable<T> GetAll();
         IEnumerable<T> FindBy(Expression<Func<T,bool>> predicate);
         bool Add(T entity);
         bool Delete(T entity);
         bool Edit(T entity);
         bool Update(string Id);
         bool Save();
    }
}