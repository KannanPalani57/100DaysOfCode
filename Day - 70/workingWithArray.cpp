#include <iostream>

using namespace std;

int main()
{
    int numbers[] = {1,2,3,4,5};

    int numbersLength = sizeof(numbers) / sizeof(numbers[2]);

    numbersLength = numbersLength -1;

  //  cout<<numbersLength;

    int reversedArray[] = {};

    for(int i = numbersLength; i >= 0; i--){

         cout<<numbers[i]<<" ";



         //reversedArray[0] += numbers[i];

         //reversedArray[i] += numbers[i];
    }
    //cout<<reversedArray[0]<<endl;

    return 0;
}
