using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aplicacion1.Controllers
{
    public class CursoController : Controller
    {
        // GET: Curso
        public ActionResult Index()
        {
            return View();
        }
        public string mensaje()
        {
            return "Bienvenido a Curso";
        }

        public JsonResult listarCurso() {
            CLinQDataContext bd = new CLinQDataContext();
            var lista = bd.Curso.Where(c => c.BHABILITADO.Equals(1))
                .Select(c => new { c.IIDCURSO, c.NOMBRE, c.DESCRIPCION });

            return Json(lista, JsonRequestBehavior.AllowGet);
               
        }
        public JsonResult BuscarCursoporNombre(string nombre)
        {
            CLinQDataContext bd = new CLinQDataContext();

            var lista = bd.Curso.Where(c => c.BHABILITADO.Equals(1) && c.NOMBRE.Contains(nombre) )
                .Select(c => new { c.IIDCURSO, c.NOMBRE, c.DESCRIPCION });

            return Json(lista, JsonRequestBehavior.AllowGet);
        }
    }
}