using namespace std;

int main(){
   vector<int> num = {10,1,5,4,3,2,1,0};
    int length =  num.size();
    
    for(int i = 0; i < length-1; i++){
        for(int j = i+1; j <length; j++){
            if(num[j] < num[i]){
                int temp = num[j];
               num[j] = num[i];
                num[i] = temp;
            }
        }}
        for(int i = 0; i < length; i++){
            cout<<num[i]<<"\t";
        }
          
        return 0;
    }
     

    
