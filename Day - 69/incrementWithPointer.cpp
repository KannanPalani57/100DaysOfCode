#include <iostream>

using namespace std;



void increment(int *p){
   (*p)++;
   cout<<p<<endl;
   cout<<*p;
}



int main()
{
     int a = 1;

     increment(&a)

    return 0;
}
