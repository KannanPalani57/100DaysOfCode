#include<iostream>
#include<string>

using namespace std;

class Student{
  string name;
  int id;
  int arr[3] = {1,2,3};
public:
    Student(int comeId, string comeName){
        id = comeId;
        name = comeName;
    }
   
   
     void show(){
        cout<<"Id :"<<id<<" Name : "<<name<<endl;
     
    }
};



int main(){
   Student s(1,"Kannan");
    s.show();
    s.remove();
    return 0;
}
