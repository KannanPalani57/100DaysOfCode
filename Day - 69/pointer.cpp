#include <iostream>

using namespace std;

int main()
{
    int x = 5;
    cout<<x<<endl;
    cout<<&x<<endl;
    cout<<*(&x)<<endl;
    int *p = &x;
    cout<<*p<<endl;
    int y = 2;
    int a = 2;
    int *z = 0;
    z = &a;
    cout<<*z;


    int v;
    cin>>v;
    int answer = increment(v);

    return 0;
}
