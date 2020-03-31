#include <iostream>

using namespace std;

int main()
{

    int array[3] = {2,3,4};

   // array[0] = 2;
    //array[1] = 3;
    //array[2] = 4;

    cout<<array[0]<<endl;
    cout<<array[1]<<endl;
    cout<<array[2]<<endl;

    double values[3] = {1.3, 3.2, 10.1};

    //cout<<values[0]<<endl;
     //cout<<values[1]<<endl;
      //cout<<values[2]<<endl;

      for(int i = 0 ; i < 3; i++){
        cout<<"index "<<i<<" element is "<<values[i]<<endl;
      }



    string names[3] = {"Kannan", "Appa", "Amma"};

    cout<<names[0]<<endl;


    for(int j = 1; j < 3;j++){
     cin>>names[j];
    }

   cout<<names[2]<<endl;



     //cout<<names[2]<<endl;
     //cout<<names[1]<<endl;
      //cout<<names[0]<<endl;


    int infinite[] = {12,5};

    cout<<infinite[0]<<endl;


    return 0;
}
