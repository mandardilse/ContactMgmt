namespace ContactMgmt.Web.Models
{
    public class ApplicationSettings
    {
        public ConnectionStrings[] ConnectionStrings { get; set; }
        public string SecretKey { get; set; }
    }
    public class ConnectionStrings
    {
        public string Database { get; set; }
        public string ConnectionStr { get; set; }
        public string DatabaseName { get; set; }
        public bool Default { get; set; }
    }
}