#include <iostream>

using namespace std;

int main()
{
   int x = 5;
   int y = 3;

   cout<<"Value of X = "<<x<<endl;
    //get the memory address of this variable.
   cout<<"Memory address of x = "<<&x<<endl;
   cout<<"Memory address of y = "<<&y<<endl;
   //cout<<"Value of Y = "<<*(&y)<<endl;  
   //it access the value of its memory address

//Without Null Pointers, Pointers may points to Other Values.
   int *valueY = NULL;   //Null Pointers.  
   valueY = &y;

   cout<<"Value of Y = "<<*valueY<<endl;   //3
    return 0;
}



int main(){

  int value = 5;

  int *ptr = &value;


  cout<<&value<<endl;
  cout<<&(*ptr)<<endl;

 *ptr = 2;

 cout<<*ptr<<endl;

 int *p;

 cout<<*p;

 int a = 13;


 cout<<a;  return 0;

}

int *doSomething(){
  int z = 5;

  int answer = *(&z);
  return answer;

