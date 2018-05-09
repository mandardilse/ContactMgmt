using System.Collections.Generic;
using System.Linq;
using ContactMgmt.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;

namespace ContactMgmt.Web.Models
{
    public class ContactMgmtContext
    {
        private readonly MongoClient Client;
        private readonly IMongoDatabase Database;
        public ContactMgmtContext(IOptions<ApplicationSettings> settings)
        {
            var database = settings.Value.ConnectionStrings.SingleOrDefault(x=>x.Database.Equals("MongoDb"));
            Client = new MongoClient(database.ConnectionStr);
            Database = Client.GetDatabase(database.DatabaseName);  
            Setup();
        }
        private void Setup()
        {
            ConventionPack pack = new ConventionPack()
            {
                new IgnoreExtraElementsConvention(true)
            };
            ConventionRegistry.Register("IgnoreExtraElements", pack, t => true);                      
        }
        public IMongoCollection<User> Users { get{return Database.GetCollection<User>("users");} }
    }
}