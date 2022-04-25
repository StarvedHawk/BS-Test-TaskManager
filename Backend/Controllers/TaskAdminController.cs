using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using BinSalem_Test.Models;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;



namespace BinSalem_Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskAdminController : ControllerBase
    {
        private readonly IConfiguration configuration;

        public TaskAdminController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT * FROM TASK_ADMIN ";
            DataTable table = new DataTable();
            string sqlDataSource = this.configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Task_Admin _Admin)
        {
            string query = @"INSERT INTO TASK_ADMIN VALUES ('" + _Admin.Admin_Name + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = this.configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Inserted Successfully");
        }
        [Route("GetAllManagedEmployees/{id}")]
        public JsonResult GetAllManagedEmployees(int id)
        {
            string query = @"SELECT EMPLOYEE_NAME FROM EMPLOYEES WHERE TASK_MASTER = "+id+@" ";
            DataTable table = new DataTable();
            string sqlDataSource = this.configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

    }

    
}
