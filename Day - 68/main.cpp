#include <iostream>
#include<string>

using namespace std;

int main()
{
  string num = {"one","two","three","four","five","six","seven","eight","nine"};

  int let = sizeof(num) / sizeof(num[0]);

  for(int j = 0; j <= let; j++){
    cout<<num[j];
  }


  for(int i =1; i <= 9; i++){
    if(i%2 == 0){
      cout<<"even";
    }else{
     cout<<"odd";
    }
    if(i == 8){
      cout<<"eight";
    }
  }














   /* int count = 0;

    while(count < 10){
      cout<<count<<" "<<endl;
      count++;  //without this control it will become the infinite loop.
    }
   cout<<"Done"<<endl;
   */
   /* int i = 0;
    int sum = 0;

   while( i < 5){
    cout<<i;

    if(i == 3){
    cout<<"enter the number :"<<endl;
    int n;
    cin>>n;
    sum = 0;
    sum = sum+n;
    }


    i++;
    }
    sum = 0;
    cout<<sum;  */



    return 0;
}












  /*  if(i != 0){
    cout<<i<<" ";
    }else{
      cout<<"blas!";
    }*/
