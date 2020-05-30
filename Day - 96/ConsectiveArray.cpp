#include <iostream>
#include<bits/stdc++.h>


using namespace std;
int main()
{
  int arr[] = {83, 78, 80, 81, 79, 82}; //array
  int N = sizeof(arr)/sizeof(arr[0]);//size of array

  int min = INT_MAX , max = INT_MIN ;
  for(int i = 0 ; i < N; i++) //find minimum and maximum element
  {
    if(arr[i] > max)
      max = arr[i];
    if(arr[i] < min)
      min = arr[i];
  }
  cout<<max<<" "<<min;
}












//
//using namespace std;
//
//int main() {
//    int arr[] = {1,5,4};
//
//    int length = sizeof(arr)/sizeof(arr[0]);
//    int max = 0;
//
//    for(int i = 0; i < length; i++){
//    	//cout<<arr[i]<<" ";
//
//    	if(i >  max){
//    		max = arr[i];
//    	}
//    	if(arr[i] <= max){
//    		cout<<arr[i]<<" ";
//    	}
//
//
//
//    }
//    //cout<<max<<endl;
//    int min = INT_MIN;
//
//    cout<<min;
//
//
//	return 0;
//}
//
