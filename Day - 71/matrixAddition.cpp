#include <iostream>

using namespace std;

int main()
{
    int a[50][50], b[50][50], add[50][50];

    cout<<"Enter the Row : "<<endl;
    int row;
    cin>>row;
    cout<<"Enter the Column : "<<endl;
    int column;
    cin>>column;
    cout<<"First Matric"<<endl;
    for(int i = 0; i < row; i++){
      for(int j = 0; j < column; j++){
       cin>>a[i][j];
      }
    }
    cout<<"Second Matrix : "<<endl;
           //second Matrix getting
     for(int i = 0; i < row; i++){
      for(int j = 0; j < column; j++){
       cin>>b[i][j];
      }
    }
          //addition process
     cout<<"Sum Of The Matrix :"<<endl;
     for(int i = 0; i < row; i++){
      for(int j = 0; j < column; j++){
        add[i][j] = a[i][j] + b[i][j];     //Lets see how simple it is...
      }
    }
    for(int i = 0; i < row; i++){
       for(int j = 0; j < column; j++){
         cout<<add[i][j]<<" ";
       }
    }

    return 0;
}
