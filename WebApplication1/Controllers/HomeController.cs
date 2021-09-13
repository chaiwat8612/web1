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

            dt.Columns.Add("umayVideoId", typeof(string));
            dt.Columns.Add("category", typeof(string));
            dt.Columns.Add("priority", typeof(Int32));
            dt.Columns.Add("typeModule", typeof(string));
            dt.Columns.Add("title", typeof(string));
            dt.Columns.Add("status", typeof(string));
            dt.Columns.Add("startDate", typeof(DateTime));
            dt.Columns.Add("endDate", typeof(DateTime));
            dt.Columns.Add("videoDate", typeof(DateTime));
            dt.Columns.Add("videoLink", typeof(string));
            dt.Columns.Add("createBy", typeof(string));
            dt.Columns.Add("createDate", typeof(DateTime));
            dt.Columns.Add("updateBy", typeof(string));
            dt.Columns.Add("updateDate", typeof(DateTime));

            dt.Rows.Add(new object[] { "2021-060000022", "PROMOTION", 0, "VIDEO", "Umay+ | เปิดฟลอร์ความสุขกับสไปร์ท บะบะบิ", "Y", "2021-08-24 00:00:00", "2031-09-24 00:00:00", "2020-11-21 00:00:00", "https://www.youtube.com/watch?v=WYv2BYvs_7Y", "ADMIN", "2021-08-30 00:00:00", "ADMIN", "2021-08-30 00:00:00" });
            dt.Rows.Add(new object[] { "2021-060000024", "ACTIVITY", 0, "VIDEO", "Umay+ ให้น้องวางใจ...ง่ายทุกฝัน", "Y", "2021-08-24 00:00:00", "2031-09-24 00:00:00", "2020-09-20 00:00:00", "https://www.youtube.com/watch?v=Mqk5SVPq-_w", "ADMIN", "2021-08-30 00:00:00", "ADMIN", "2021-08-30 00:00:00" });
            dt.Rows.Add(new object[] { "2021-060000024", "OTHER", 0, "VIDEO", "Umay+ เพราะรอยยิ้มของเรามาจากความใส่ใจ", "Y", "2021-08-24 00:00:00", "2031-09-24 00:00:00", "2020-05-22 09:49:22", "https://www.youtube.com/watch?v=1Iq32pXojRk", "ADMIN", "2021-08-30 00:00:00", "ADMIN", "2021-08-30 00:00:00" });

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
