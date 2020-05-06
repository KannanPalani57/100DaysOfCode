#include <iostream>
#include<vector>

using namespace std;

int main()
{
    vector<int> vec;    //vec.size() used to get the length of the vector

    vec.assign(7,5);

    cout<<endl;
    //add the item in the back
    vec.push_back(2);
    int s = vec.size();  //get the size of the vector

     vec.pop_back();

     vec.insert(vec.begin(), 10);

     vec.erase(vec.begin());

     //vec.clear();  //clears everything in the vector

     for(int i = 0; i < vec.size(); i++){
      cout<<vec[i]<<" ";
    }

    return 0;
}
