#include<iostream>
#include<vector>

using namespace std;

int main(){

	int *p;
	int i = 5;
	p = &i;
	cout<<"Memory Address is "<<p<<endl;
	cout<<"Value is "<<*p<<endl;
     vector<int> arr =  {5,4,3,2};
	int k = 0;
	while(k < arr.size()){
      cout<<arr[k]<<" ";
      k++;
	}
	cout<<endl;
	cout<<"Enter the Number to get the day :"<<endl;
    int no;
    cin>>no;
    switch(no){
    				case 1:
    					cout<<"Sunday";
    					break;
    				case 2:
    					cout<<"Monday";
    					break;
    }
    

	return 0;
