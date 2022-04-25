using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinSalem_Test.Models
{
    public class Task
    {
        public int Task_ID { get; set; }
        public int Employee_ID { get; set; }
        public string Task_Name { get; set; }
        public string Task_Desc { get; set; }
        public bool is_Complete { get; set; }
    }
}
