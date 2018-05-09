using System;
using System.Collections.Generic;

namespace ContactMgmt.Entities
{
    public class User : IAuditFields
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string FirstName { get; set; }
        public string MiddleName { get; set; } = null;
        public string LastName { get; set; }        
        public string Email { get; set; }
        public string Password { get; set; }
        //public string Salt { get; set; }

        //public int LockoutCount { get; set; } = 0;
        //public DateTime? LockoutDateTime { get; set; } = null;

        //public string RecoveryToken { get; set; }
        //public DateTime? RecoveryTokenExpiration { get; set; }

        //public string ActivationToken { get; set; }
        //public DateTime? ActivationTokenExpiration { get; set; }

        //public bool EmailValidated { get; set; } = false;
        public DateTime LastSignin { get; set; } = DateTime.Now;
        public List<string> Roles { get; set; } = new List<string>();
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set ; } = DateTime.Now;
        public string UpdateBy { get ; set; } 
        public DateTime UpdatedOn { get; set; } = DateTime.Now;        
    }
}