using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [System.Web.Services.WebMethod]
        public static string GetName(string name0)
        {
            return "Hello" + name0;
        }

        [System.Web.Services.WebMethod]
        public static string GetName1(string name1)
        {
            return "Hello" + name1;
        }

        [System.Web.Services.WebMethod]
        public static string GetName2(string name2)
        {
            return "Hello" + name2;
        }

        [System.Web.Services.WebMethod]
        public static string GetName3(string name3)
        {
            return "Hello" + name3;
        }
    }
}