#include <iostream>
#include <fstream>

using namespace std;

int main()
{

    char name[50];

    cout<<"Type Your name to Print in Text File : "<<endl;
    cin>>name;

    ofstream file("print.txt",ios::app);
    file<<name;
    file.close();
    cout<<"The text has been wrote into the Text file successfully "<<endl;

    ifstream obj("print.txt");

    char getNames[50];a

    obj.getline(getNames,50);

    cout<<"Readed text is "<<getNames;


    return 0;
}
