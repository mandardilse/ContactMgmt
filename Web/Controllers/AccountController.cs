using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
		public async Task<IActionResult> Register([FromBody] UserRegistration userInfo)
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
				return Ok(JwtTokenHelper.GenerateToken(user.Email, user, _configuration));
			}
			return StatusCode(500, "Registration Failed!");
		}

		[HttpPost]
		public async Task<IActionResult> LoginAsync([FromBody] UserLogin userInfo)
		{
			var result = await _signInManager.PasswordSignInAsync(userInfo.EmailId, userInfo.Password, false, false);
			if (result.Succeeded)
			{
				var appUser = _userManager.Users.SingleOrDefault(u => u.Email == userInfo.EmailId);
				if (appUser != null)
					return NotFound(userInfo);
				return Ok(JwtTokenHelper.GenerateToken(appUser.Email, appUser, _configuration));
			}
			return StatusCode(500, "Login Failed!");
		}

		//TODO: This method would be protected. Hence Authorized attribute would be added.
		[HttpGet]
		public async Task<IActionResult> UserList()
		{
			var result = await _userManager.Users.ToListAsync();
			if (result == null)
				return NotFound();
			return Ok(result);
		}

	}
}