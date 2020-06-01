#include<iostream>
#include<vector>

int main() {
  vector<int> numbers = {10,20,30};
    //forEach Method    
    for(int number: numbers){
        number = 3;
        cout<<number<<" ";
    }
    cout<<endl;
    for(auto number: numbers){
        cout<<number<<" ";
    }
     //Quess the simple output.
    return 0;
}
