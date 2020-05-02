#include <iostream>

using namespace std;

int main()
{
   for(int i = 5; i >= 1;i--){
      for(int j = i; j >= 1; j--){
        cout<<"* ";
      }
      cout<<endl;
   }

   /*int star = 0;
   for(int i = 1; i <= 5;){
      if(star < i){
       cout<<"* ";
       star++;
       continue;
      }
      if(star == i){
        cout<<"\n";
        i++;
        star = 0;
      }


      for(int i = 5; i >= 1; i--){
       for(int j = i; j >= 1; j--){
         cout<<"* ";
       }
       cout<<endl;
      }*/

   


    return 0;
}
