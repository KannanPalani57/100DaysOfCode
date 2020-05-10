#include <iostream>
#include<string>

using namespace std;

int main()
{
   string a = "abcd", b = "ef";
   cout<<a.size()<<" "<<b.size()<<endl;
   cout<<a + b<<endl;
   char a0 = a[0], b0 = b[0];
  // cout<<a0<<" "<<b0;
   a = "bcd";
   b = "f";
   cout<<b0+a<<" "<<a0+b;
    return 0;
}
