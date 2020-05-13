#include <iostream>
#include<string>
using namespace std;


class Animal{
//member variables are private here, Encapsulation(Information Hiding)
 string name;
 string catagory;   //the information only avaialble within the class
 string color;
public:
 void setData(string animName, string animType, string animColor){
	 name = animName;
	 catagory = animType;
	 color = animColor;
 } //getting the animal status
 void getAnimal(){
	  cout<<name<<" "<<catagory<<" "<<color;  //Dog Mammals Grey
  }
};
int main() {
    Animal a;
    //we are using functions to add and retrieve the member variable's hold data.
    //we are not assiging value with members variable. So that are private.
    a.setData("Dog", "Mammals", "Grey");  //calling function with object. 
    a.getAnimal();
	return 0;
}




















