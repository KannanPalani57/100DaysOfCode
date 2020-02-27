class ThisConstructor{
    String name = "My name is Kannan";

    ThisConstructor(){
        System.out.println(name);
    }

    ThisConstructor(int id){
         this();   //here, this keyword is used to constructor chaining..
        System.out.println("And My Id is "+id);
       
    }
   
    
    public static void main(String[] args){
        ThisConstructor obj = new ThisConstructor(5);
    }
}