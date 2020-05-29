
#include <iostream>
using namespace std;

bool find(int arr[], int value, int size){
	for(int i = 0; i < size; i++){
		if(arr[i] ==value){
			return true;
		}
	}
	return false;
}


bool findTheNumber(int arr[], int size){
	int i = 0;
	while(i < size){

		int sum = arr[i] * 2;
		cout<<sum;
		if(arr[i] == sum){
			return true;
		}
		i++;
	}
	return false;
}


int main() {
	int arr[] = {1,2,3,4,8};
	int size = sizeof(arr)/sizeof(arr[0]);

	bool result = findTheNumber(arr, size);

    cout<<result;


	//int value = 7;


//	bool a = find(arr, value,size);
//	if(a){
//		cout<<"The number is found";
//	}else{
//		cout<<"The number is not found";
//	}
	return 0;
}
