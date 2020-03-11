interface Introduce{
  void getDetails();
}

class MySelf implements Introduce{
    public void getDetails(){
        System.out.println("I am Kannan, I am a Computer Science Student");
    }
}

class Yourself implements Introduce{
    public void getDetails(){
        System.out.println("I am curious. Tell About Yourself..And Notify Me to watch this");
    }
}

class TestInterface{
    public static void main(String[] args){
      Introduce obj1 = new MySelf();
      obj1.getDetails();
      Introduce obj2 = new Yourself();
      obj2.getDetails();
    }
}
