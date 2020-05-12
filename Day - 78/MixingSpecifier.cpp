#include <iostream>
#include<string>

using namespace std;

class Animal{
 //member variables are private here, and assinging from main outside of scope
 string name;
 string type;
 string color;

public:
 void setData(string animName, string animType, string animColor){
	 name = animName;
	 type = animType;
	 color = animColor;
 }
 //getting the animal status
 void getAnimal(){
	  cout<<name<<" "<<type<<" "<<color;
  }

};


int main() {
    Animal a;
    //we are not assinging the value directly to from this method.
    a.setData("Dog", "Good One", "grey");
    a.getAnimal();

	return 0;
}




















