class MethodOverloading{
    
    //Method Overriding.

     static int add(int a, int b){
        return a+b;
    }

    static int add(int a, int b, int c){
        return a+b+c;
    }

    static double add(double a, double b){
        return a+b;
    }

     static double add(double a, double b,double c){
        return a+b+c;
    }

    public static void main(String[] args){

        //calling the blocks
        int twoValues = MethodOverloading.add(1,5);
       System.out.println(twoValues);

       int threeValues = MethodOverloading.add(1,5,1);
       System.out.println(threeValues);
       
       double twoDoubleValues = MethodOverloading.add(1.5,2.5);
       System.out.println(twoDoubleValues);
       
       double threeDoubleValues = MethodOverloading.add(1.5,2.5,1.0);
       System.out.println(threeDoubleValues);
    }

   
}