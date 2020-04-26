class Calculate{  
  static int cube(int x){  
  return x*x*x;  
  }  
  
  public static void main(String args[]){  
  int result=Calculate.cube(5);   //there is no need to create a object for static methods 
  System.out.println(result);  
  }  
}  
