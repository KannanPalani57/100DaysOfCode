//#include <iostream>
//using namespace std;
//
//bool compare(int a, int b){
//	return a > b;     //bool function might be return a expression
//}
//
//
//int main() {
//    int i = max(5,2);
//
//    int a = 5, b = 8;
//
//    int isBig = compare(a,b);
//
//    //cout<<isBig;
//
//    int arr[] = {1,0,0,1,1,1,1};
//
//    int count = 0;
//    int result = 0;
//
//    int size = sizeof(arr) / sizeof(arr[1]);
//    //cout<<size;
//
//
//    for(int j = 0; j < size; j++){
//    	if(arr[j] == 0){
//    		count = 0;
//    	}
//    	else{
//    		count++;
//    		result = max(result,count);
//    	}
//
//    }
//
//
//
//
//	cout<<result;
//    return 0;
//}


#include<bits/stdc++.h>
#include<iostream>

using namespace std;

int consective(vector<int> arr){
	int size = arr.size();
	int count = 0;
	int result = 0;
	for(int j = 0; j < size; j++){
	    	if(arr[j] == 0){
	    		count = 0;
	    	}
	    	else{
	    		count++;
	    		result = max(result,count);
	    	}

	    }
	return result;
}


int main(){

    vector<int> arr = {0,1,1,1};

    int answer = consective(arr);

    cout<<answer;
	return 0;
}















