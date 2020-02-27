class This{
   int id;
   String name;
    //used to refer the current instance of the class.
    This(int id, String name){
        this.id =id;
        this.name = name;
    }
    void display(){
        System.out.println(id+" "+name);
    }
    public static void main(String[] args){
       This obj1 = new This(1,"Kannan");
       This obj2 = new This(2, "Palani"); 
       obj1.display();
       obj2.display();
    }
}