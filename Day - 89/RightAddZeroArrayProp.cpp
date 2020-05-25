class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        int n = arr.size();
        int i = 0;
        int ele = 0;
        int z = 0;
        for( ; i<n; i++){
            if(arr[i] !=0){
                ele ++;
            }
            else {
                z ++;
                ele+=2;
            }
            if(ele >=n ){
                break;
            }
        }
        int j = n-1;
        if(n-z*2-(i+1-z)<0){
            arr[j] = arr[i];
            j--;
            i--;
        }
        while(j>=0 and i>=0){
            if(arr[i] != 0){
                arr[j] = arr[i];
                j--;
                i--;
            }
            else {
                arr[j] = 0;
                if(j-1>=0)
                    arr[j-1] = 0;
                j = j-2;
                i--;
            }
        }
    }
};
