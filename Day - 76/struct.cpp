#include <iostream>
#include<string>
using namespace std;


struct student{
  string name;
  int id, mark;
};


int main()
{
   student stu;
    stu.id = 4;
    stu.name = "xxx";
    stu.mark = 94;
   cout<<stu.id<<endl;
   cout<<stu.name<<endl;
    cout<<stu.mark<<endl;

    return 0;
}
