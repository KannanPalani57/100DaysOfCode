//#include <iostream>
//#include<vector>
//#include<bits/stdc++.h>
//
//using namespace std;
//void pass(int b){
//	b = 2;
//}
//
//
//
//int main() {
//	vector<int> arr = {-2,0,3,4,5};
//	vector<int> square;
//
//	for(int i = 0; i < arr.size(); i++){
//	      square.push_back(arr[i] * arr[i]);
//	}
//
//	for(int j = 0; j < arr.size(); j++){
//		     cout<<square[j]<<" ";
//		}
//
//	int n = square.size();
//    cout<<endl;
//
//
//	return 0;
//}



#include<iostream>
#include<vector>

using namespace std;

vector<int> classify(vector<int> arr[], int n){
	for(int i = 0; i <n; i++){
		cout<<arr[i]<< " ";
	}
	return arr;
}


int main(){
	vector<int> arr = {5,4,3,2,1};

	int n = arr.size();

	vector<int> square;


	for(int i = 0; i < n; i++){
	    square.push_back(arr[i]*arr[i]);
	}

	for(int i = 0; i < n; i++){
		    cout<<square[i]<<" ";
		}

	classify(int square[],int n);

   return 0;
}














