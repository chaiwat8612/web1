using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {

            #region sample data
            DataTable dt = new DataTable();
            dt.Clear();

            dt.Columns.Add("umayNewsDoc",typeof(string));
            dt.Columns.Add("typeModule", typeof(string));
            dt.Columns.Add("title", typeof(string));
            dt.Columns.Add("description", typeof(string));
            dt.Columns.Add("metaTag", typeof(string));
            dt.Columns.Add("metaDescription", typeof(string));
            dt.Columns.Add("imageM", typeof(string));
            dt.Columns.Add("imageL", typeof(string));
            dt.Columns.Add("status", typeof(string));
            dt.Columns.Add("startDate",typeof(DateTime));
            dt.Columns.Add("endDate", typeof(DateTime));
            dt.Columns.Add("createBy", typeof(string));
            dt.Columns.Add("createDateTime", typeof(DateTime));
            dt.Columns.Add("updateBy", typeof(string));
            dt.Columns.Add("updateDateTime", typeof(DateTime));
            dt.Columns.Add("newsDate", typeof(DateTime));
            dt.Columns.Add("videoLink", typeof(string));
            dt.Columns.Add("category", typeof(string));
            dt.Columns.Add("priority", typeof(Int32));

            dt.Rows.Add(new object[] { "2021-060000022", "NEWS", "Umay+ พร้อมดูแลคุณ", "รายละเอียด โปรโมชัน", "700", "700", "2021-060000022M.jpg", "2021-060000022L.jpg", "Y", "2021-06-28 00:00:00", "2021-06-28 00:00:00", "ADMIN", "2021-06-28 09:49:22", "", "2021-06-28 09:49:22", "2021-06-28 09:49:00", "https://www.youtube.com/watch?v=tQ1wvUe6n8k", "promotion", 1});
            dt.Rows.Add(new object[] { "2021-060000024", "NEWS", "บริการเพิ่มวงเงินผ่าน Umay+ Mobile Application", "รายละเอียด บริการ", "Increase", "Increase", "2021-060000024M.jpg", "2021-060000024L.jpg", "Y", "2021-08-18 00:00:00", "2021-09-18 00:00:00", "ADMIN", "2021-08-18 18:25:00", "", "2021-08-18 18:25:00", "2021-08-18 00:00:00", "https://www.youtube.com/watch?v=MoEYvVa14y4", "service", 1 });
            dt.Rows.Add(new object[] { "2021-060000025", "NEWS", "รอยยิ้มของผู้ให้ คือรอยยิ้มที่มีค่ามากที่สุด", "รายละเอียด กิจกรรม", "Smile", "Smile", "2021-060000025M.jpg", "2021-060000025L.jpg", "Y", "2021-08-19 00:00:00", "2021-09-19 00:00:00", "ADMIN", "2021-08-19 18:25:00", "", "2021-08-19 18:25:00", "2021-08-19 00:00:00", "https://www.youtube.com/watch?v=24JOuKAdpio", "activity", 1 });
            dt.Rows.Add(new object[] { "2021-060000026", "NEWS", "PAY IT FORWARD 9", "อื่นๆ", "Happy Sprite", "Happy Sprite", "2021-060000026M.jpg", "2021-060000026L.jpg", "Y", "2021-08-20 00:00:00", "2021-09-20 00:00:00", "ADMIN", "2021-08-20 18:25:00", "", "2021-08-20 18:25:00", "2021-08-20 00:00:00", "https://www.youtube.com/watch?v=RUlM8aJ8vZE", "", 1 });

            DataSet DS = new DataSet();

            #endregion

            DS.Tables.Add(dt);

            ViewBag.dt = DS.Tables[0];

            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
