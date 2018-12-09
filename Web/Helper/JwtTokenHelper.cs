using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Web.Helper
{
	public static class JwtTokenHelper
	{
		public static string GenerateToken(string email, IdentityUser user, IConfiguration configuarion)
		{
			var claims = new List<Claim>{
				new Claim(JwtRegisteredClaimNames.Sub, email),
				new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
				new Claim(ClaimTypes.NameIdentifier,user.Id)
			};
			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuarion["JWT:Key"]));
			var credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
			var expires = DateTime.Now.AddDays(Convert.ToDouble(configuarion["JWT:ExpiryDays"]));

			var token = new JwtSecurityToken(
				configuarion["JWT:Issuer"],
				configuarion["JWT:Issuer"],
				claims,
				expires: expires,
				signingCredentials: credential
			);
			return new JwtSecurityTokenHandler().WriteToken(token);
		}
	}
}