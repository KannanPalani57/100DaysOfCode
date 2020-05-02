#include <iostream>

using namespace std;

int findBig(int x,int y, int z, int k){
    if(x > y && x>z && x > k){
      return x;
    }else if(y > x&& y>z && y> k){
     return y;
    }else if (k > x && k > y && k > z){
      return k;
    }else{
      return z;
    }
  }

int main(){

    int a,b,c,d;
    cin>>a>>b>>c>>d;
    int answer = findBig(a,b,c,d);
    cout<<answer;
    return 0;
}
