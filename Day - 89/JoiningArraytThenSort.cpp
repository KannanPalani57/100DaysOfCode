#include <iostream>
#include <vector>
using namespace std;

//[1,2,3,0,0,0]
//[2,5,6]
//[1,2,2,3,5,6]

vector<int> calculation(vector<int>& fnums, vector<int>& snums){
	//vector<int> result;

	for(int i = 3; i <fnums.size();i++){
		//cout<<fnums[i]<<" ";
		for(int j= i-3; j == i-3; j++){
			fnums[i] = snums[j];
		}
	}
	for(int i = 0; i < fnums.size() - 1; i++){

		int min = i,temp;
		for(int j = i+1; j < fnums.size(); j++){
			   if (fnums[j] < fnums[min])
			            min = j;
			      temp = fnums[i];
			      fnums[i] = fnums[min];
			      fnums[min] = temp;
		}
	}

	return fnums;
}


int main() {

	vector<int> fnums = {1,2,3,0,0,0};
	vector<int> snums = {2,5,6};

	vector<int> result = calculation(fnums, snums);

	for(int i = 0; i < result.size(); i++){
		cout<<result[i]<<"\t";
	}

	return 0;
}
