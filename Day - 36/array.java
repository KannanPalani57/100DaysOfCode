class ArrayInJava{
    public static void main(String[] args){
        int numbers[] = new int[5];
        numbers[0] =  1;
        numbers[1] = 2;
        numbers[2] = 3;
        numbers[3] = 4;
        numbers[4] = 5;
                
          System.out.println(numbers.length);      
        for(int i = 1; i < numbers.length; i++){
            System.out.println(numbers[i]);
        }
    }
}