#include <iostream>
#include<vector>

using namespace std;

int main()
{
    vector<int> numbers;

    for(int i = 1; i <= 10 ; i++){
      numbers.push_back(i);           //push_ack
    }

    for(int i = 0; i < numbers.size(); i++){
       cout<<numbers[i]<<" ";
    }

   /* for(auto i = numbers.begin(); i != numbers.end(); i++){
      cout<<*i<<" ";
    }*/
    return 0;
}
