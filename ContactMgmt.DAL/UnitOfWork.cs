namespace ContactMgmt.DAL
{
    public class UnitOfWork: IUnitOfWork
    {
        public IDbContext Context {get; set;}
        public UnitOfWork(IDbContext context)
        {
            Context = context;
        }

        public void Commit()
        {
            
        }

        public void Dispose()
        {
            
        }
    }
}