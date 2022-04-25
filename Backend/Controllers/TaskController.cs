using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using BinSalem_Test.Models;

namespace BinSalem_Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IConfiguration configuration;

        public TaskController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT * FROM Task ";
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
        public JsonResult Post(Models.Task task)
        {
            string query = @"INSERT INTO TASK
                            (EMPLOYEE_ID,TASK_NAME,TASK_DESC) 
                            VALUES 
                            (" + task.Employee_ID + @",
                            '" + task.Task_Name + @"', 
                            '" + task.Task_Desc + @"')";
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
        [HttpPut]
        public JsonResult Put(Models.Task task)
        {
            string query = @"UPDATE TASK SET TASK_DESC = '"+task.Task_Desc+@"' ,TASK_NAME = '"+task.Task_Name+@"' WHERE TASK_ID = "+task.Task_ID+@"";
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
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        //Sending ID in the URL
        public JsonResult Delete(int id)
        {
            string query = @"DELETE FROM TASK WHERE TASK_ID = " + id+ @"";
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
            return new JsonResult("Deleted Successfully");
        }
        [Route("CompleteTask/{id}")]
        public JsonResult CompleteTask(int id)
        {
            string query = @"UPDATE TASK SET IS_COMPLETE = 1 WHERE TASK_ID = "+id+@"";
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
            return new JsonResult("Task Completed");
        }
    }

}
