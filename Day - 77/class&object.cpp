#include<iostream>
#include<string>

using namespace std;

class Person{
public:
	string name;
	int id;
	int mark;
	Person(int m){
		mark = m;
	}
	void showId();
	void showName(){
		cout<<"My name is "<<name<<endl;
	}
};
//using scope resolution operator to get the member function
void Person::showId(){
	cout<<"The "<<name<<" Id is "<<id<<endl;
}

int main(){
     Person p(55);
     p.id = 5;
     p.name = "Kannan";

     p.showName();
     p.showId();
	  //with constructor assigned.
     cout<<"His Mark is "<<p.mark<<endl;

     return 0;

}
