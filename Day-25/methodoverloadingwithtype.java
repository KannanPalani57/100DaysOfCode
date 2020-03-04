class MethodTypeOverloading{
    void sum(int a,long b){
        System.out.println(a+b);
    }
    void sum(long a,String name){
        System.out.println(a);
        System.out.println(name);
    }

    public static void main(String[] args){
          MethodTypeOverloading obj = new MethodTypeOverloading();

          obj.sum(10,10); //second literal promoted to long variable.
          obj.sum(20, "Hello from Kannan");
    }
}