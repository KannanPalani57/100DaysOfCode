#include <iostream>
using namespace std;

class Stack{
  int arr[10];
public:
  int item = 0;
  void add(int n){
	  arr[item++] = n;

  }
  void show(){
	 int len = sizeof(arr)/sizeof(arr[1]);
    for(int i = 0; i < len; i++){
    	cout<<arr[i]<<" ";
    }
  }
  int remove(){
	  return arr[--item];
  }
};


int main() {
   Stack s;
   s.add(2);
   s.add(3);
   s.show();
   s.remove();
   s.remove();
   return 0;
}
