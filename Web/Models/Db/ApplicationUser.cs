using System;
using Microsoft.AspNetCore.Identity;

namespace Web.Models.Db
{
	public class ApplicationUser : IdentityUser
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public DateTime? DateOfBirth { get; set; }
	}
}