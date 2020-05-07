#include <string>
#include<iostream>
#include <sstream>
#include <vector>

using namespace std;

int main()
{
  string numbers = "23,24,27,28";
  vector<int> integers;
  stringstream s(numbers);
  char ch;
  int a;
  while(s>>a>>ch) integers.push_back(a);   //s >> reads int char pair  //it lets last one.
  s>>a;                                    // reads the last int
  integers.push_back(a);

  for(int i = 0; i < integers.size(); i++)
  cout << integers[i] << "\n";
}
