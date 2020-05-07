#include <iostream>
#include<vector>
#include<sstream>

using namespace std;


    /*int arr[] = { 6, 3, 5, 2, 8 };
    int n = sizeof(arr)/sizeof(arr[0]);

    int elem = 2;

    int i = 0;
    while (i < n)
    {
        if (arr[i] == elem) {
            break;
        }
        i++;
    }

    if (i < n) {
        cout << "Element " << elem << " is present at index " << i
             << " in the given array";
    }
    else {
        cout << "Element is not present in the given array";
    }

    arr[3] = 10;
    cout<<arr[3]<<endl;
    return 0;

  void printLength(vector<int> &arr){
     cout<<arr.size()<<endl;
     cout<<arr[1]<<endl;
     arr.resize(10);
     for(int i: arr){
      cout<<i<<" ";
     }
     arr.resize(3); //only three elements only occured.
  }


   int main()
{
   vector<int> vector1 = {10,20,30,40,50};

   cout<<vector1.at(2)<<endl;
   printLength(vector1);
   return 0;
}
*/

int main(){

  /*string str = "apple 2kg";
  stringstream sin(str);

  string product;
  string quantity;

  sin>>product;
  sin>>quantity;

  cout<<product;
  cout<<quantity;
*/
stringstream str("10 11 12");
  int a, b,c;
  str>>a;
  str>>b;
   cout<<a<<endl;
   cout<<b;
    return 0;
}











