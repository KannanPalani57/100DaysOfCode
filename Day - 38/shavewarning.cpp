#include<iostream>
#include<string>

using namespace std;

int main(){
	
	//College Watchman
	cout<<"Permission to the College"<<endl;
	cout<<"College WatchMan Asks to You"<<endl;
	cout<<"Did Shave your Beard ?"<<endl;
	//Student 
	string answer;
	cin>>answer; 
	
    if(answer == "yes"){
    	cout<<"You are permit to attend the class."<<endl;
    }
    if(answer != "yes"){
    	cout<<"You are not eligible attend the class Today.";
    }
	
	
	
	return 0;
}
