using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aplicacion1.Controllers
{
    public class AlumnoController : Controller
    {
        CLinQDataContext bd = new CLinQDataContext();
        // GET: Alumno
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult listarAlumnos()
        {
            var lista = (bd.Alumno.Where(a => a.BHABILITADO.Equals(1))
                .Select(a => new 
                { 
                    a.IIDALUMNO, 
                    a.NOMBRE, 
                    a.APPATERNO,
                    a.APMATERNO,
                    a.TELEFONOPADRE
                })).ToList();

            return Json(lista, JsonRequestBehavior.AllowGet);

        }
        public JsonResult cmbSexo() {
            var lista = bd.Sexo.Where(s => s.BHABILITADO.Equals(1))
                .Select(s => new
                {
                    IID= s.IIDSEXO,
                    s.NOMBRE
                });
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        public JsonResult filtarPorSexo(int value) {
            
            var lista = (bd.Alumno.Where(a => a.BHABILITADO.Equals(1) && a.IIDSEXO.Equals(value))
                .Select(a => new
                {
                    a.IIDALUMNO,
                    a.NOMBRE,
                    a.APPATERNO,
                    a.APMATERNO,
                    a.TELEFONOPADRE
                })).ToList();

            return Json(lista, JsonRequestBehavior.AllowGet);

        }
    }
}