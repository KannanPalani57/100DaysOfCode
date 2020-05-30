
#include <iostream>
using namespace std;
#include<vector>

bool calculation(vector<int>& numbers,int length,int k){
	int size = numbers.size(), count = 0;
	//cout<<size;
	for(int i = 0; i < size-1; i++){
		//cout<<numbers[i]<<" ";
		int sum = 0;
		for(int j = i+1; j < size; j++){
		 sum= numbers[i] + numbers[j];

			if(k == sum){
				count++;
				continue;
		}}
	}
return count != 0;
}


int main() {
	vector<int> numbers = {10,2,12,3};
	int length = numbers.size(), k  =55;

	bool result = calculation(numbers, length, k);

	if(result){
		cout<<"The number is occuring in the array: "<<k;
	}else{
		cout<<"The number is not occuring in the array: "<<k;
	}

	return 0;
}
