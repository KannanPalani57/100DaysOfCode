class Check{  
private int number=40;  
private void msg(){System.out.println("Hello java");}  
}  
  
public class Simple{  
 public static void main(String args[]){  
   Check obj=new Check();  
   System.out.println(obj.number);//Compile Time Error  
   obj.msg();//Compile Time Error  
   }  
}  