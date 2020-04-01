using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aplicacion1.Controllers
{
    public class PeriodoController : Controller
    {
        // GET: Periodo
        public ActionResult Index()
        {
            return View();
        }
        public string mensaje() {
            return "Bienvenido a Periodo";
        }
        public JsonResult listarPeriodos()
        {
            CLinQDataContext bd = new CLinQDataContext();
            var lista = bd.Periodo.Where(p => p.BHABILITADO.Equals(1))
                .Select(p => new { p.IIDPERIODO, p.NOMBRE, 
                    FECHAINICIO= ((DateTime)p.FECHAINICIO).ToShortDateString(), 
                    FECHAFIN = ((DateTime)p.FECHAFIN).ToShortDateString() });

            return Json(lista, JsonRequestBehavior.AllowGet);

        }
        public JsonResult BuscarPeriodoporNombre(string nombre)
        {
            CLinQDataContext bd = new CLinQDataContext();
            var lista = bd.Periodo.Where(p => p.BHABILITADO.Equals(1) && p.NOMBRE.Contains(nombre))
                .Select(p => new {
                    p.IIDPERIODO,
                    p.NOMBRE,
                    FECHAINICIO = ((DateTime)p.FECHAINICIO).ToShortDateString(),
                    FECHAFIN = ((DateTime)p.FECHAFIN).ToShortDateString()
                });

            return Json(lista, JsonRequestBehavior.AllowGet);
        }
    }
}