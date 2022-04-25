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
    public class EmployeesController : ControllerBase
    {
        private readonly IConfiguration configuration;

        public EmployeesController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT * FROM Employees ";
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
        [HttpPost]
        public JsonResult Post(Employees employees)
        {
            string query = @"INSERT INTO EMPLOYEES VALUES 
                            (" + employees.Task_Master + @",
                            '" + employees.Employee_Name + @"',
                            '" + employees.Employee_Email + @"')";
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
        
        [Route("GetAllTasks/{id}")]
        public JsonResult GetAllTasks(int id)
        {
            string query = @"SELECT * FROM TASK WHERE EMPLOYEE_ID = " + id + @" ";
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
        [Route("GetCompletedTasks/{id}")]
        public JsonResult GetCompletedTasks(int id)
        {
            string query = @"SELECT * FROM TASK WHERE EMPLOYEE_ID = " + id + @", IS_COMPLETED = 1 ";
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
        [Route("GetIncompleteTasks/{id}")]
        public JsonResult GetIncompleteTasks(int id)
        {
            string query = @"SELECT * FROM TASK WHERE EMPLOYEE_ID = " + id + @", IS_COMPLETED = 0 ";
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
