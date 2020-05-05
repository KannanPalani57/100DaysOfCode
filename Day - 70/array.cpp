#include <iostream>

using namespace std;

int main()
{
    string name[3];

    name[0] = "kannan";
    name[1] = "palani";
    name[2] = "mari";
  //  name[3] = "hee";

    cout<<name[0]<<endl;

     int arr[3] = {1,2,3};
     cout<<arr[0]<<endl;

    int five[] = {5,5,5,5,5}; //setting array length by initializing the list.


    //finding total score of students
    int marks[] = {50,30,20,10,50,30,10,90};

    int length = sizeof(marks) / sizeof(marks[0]);

    int totalMark = 0;

    for(int mark = 0; mark < length; mark++){
       totalMark = totalMark + marks[mark];//or totalMark += mark;

       if(marks[mark] > 80){
         cout<<marks[mark]<<endl;   //getting best marks
       }
    }

    cout<<totalMark<<endl;








    return 0;
}
