using System;
namespace ContactMgmt.Entities
{
    public interface IAuditFields
    {
        string CreatedBy {get;set;}
        DateTime CreatedOn {get;set;}
        string UpdateBy {get;set;}
        DateTime UpdatedOn {get;set;}
    }
}