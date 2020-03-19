#include<iostream>
#include<iomanip>

using namespace std;

int main(){
    
	cout<<"The Size of Float is "<<sizeof(float)<<endl;
	
	float floatValue = 32.3488888;
	cout<<floatValue<<endl;
    //cout<< fixed<<floatValue<<endl;
    //cout<< scientific<<floatValue<<endl;
	
    double dValue = 32.34444333;	
    cout<<fixed<<dValue<<endl;

	
	long double lvalue = 30.33333333;
	cout<<fixed<<lvalue<<endl;

    char letter = 'p';
    cout<< (int)letter<<endl;
   
     
     wchar_t letter1  = 'i';
     cout<<(char)letter1<<endl;
     
     char num = '7';
     cout<<(char)num;
     
   	return 0;
}
