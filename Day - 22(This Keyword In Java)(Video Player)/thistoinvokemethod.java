//this keyword to invoke the current class method

class ThisMethod{
    
    void first(){
        System.out.println("Hello from this method");
    }

    void second(){
      this.first();
  
        System.out.println("Hello From Main Method");

//        first();//if not use this keyword, compiler automatically adds this keyword.

    }
    
    
    public static void main(String[] args){
       ThisMethod obj = new ThisMethod(); //object creation here..
       obj.second();//calling the function here.
    }
}