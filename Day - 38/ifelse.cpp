#include <iostream>

using namespace std;

int main()
{
    string firstname= "kannan";
    string lastname = "palani";

    cout<<"What's your name"<<endl;
    string getname;
    cin>>getname;

    if(getname == "kannan"){
       cout<<"I Know, it is your firstname";
    }
    else if(lastname == "palani"){
      cout<<"I know, it is last name";
    }

    return 0;
}
