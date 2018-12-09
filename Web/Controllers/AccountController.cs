using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Web.Helper;
using Web.Models.Db;
using Web.Models.Dto;

namespace Web.Controllers
{
	[Route("api/[controller]/[action]")]
	public class AccountController : ControllerBase
	{
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly SignInManager<ApplicationUser> _signInManager;
		private readonly IConfiguration _configuration;

		public AccountController(UserManager<ApplicationUser> userManager,
			SignInManager<ApplicationUser> signInManager, IConfiguration configuration)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_configuration = configuration;
		}

		[HttpPost]
		public async Task<string> Register([FromBody] UserRegistration userInfo)
		{
			var user = new ApplicationUser
			{
				UserName = userInfo.EmailId,
				Email = userInfo.EmailId,
				FirstName = userInfo.FirstName,
				LastName = userInfo.LastName,
				DateOfBirth = userInfo.DateOfBirth,
				PhoneNumber = userInfo.Contact
			};
			var result = await _userManager.CreateAsync(user, userInfo.Password);
			if (result.Succeeded)
			{
				await _signInManager.SignInAsync(user, false);
				return JwtTokenHelper.GenerateToken(user.Email, user, _configuration);
			}
			throw new ApplicationException("Registration Failed!");
		}

		[HttpPost]
		public async Task<string> Login([FromBody] UserLogin userInfo)
		{
			var result = await _signInManager.PasswordSignInAsync(userInfo.EmailId, userInfo.Password, false, false);
			if (result.Succeeded)
			{
				var appUser = _userManager.Users.SingleOrDefault(u => u.Email == userInfo.EmailId);
				return JwtTokenHelper.GenerateToken(appUser.Email, appUser, _configuration);
			}
			throw new ApplicationException("Login Failed!");
		}

	}
}