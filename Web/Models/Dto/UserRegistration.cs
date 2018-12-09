using System;

namespace Web.Models.Dto
{
	public class UserRegistration
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public DateTime? DateOfBirth { get; set; }
		public string EmailId { get; set; }
		public string Password { get; set; }
		public string Contact { get; set; }
	}
}