class Bank{
    int getRateOfInterest(){
        return 0;
    }
}

class SBI extends Bank{
     int getRateOfInterest(){
        return 8;
    }
}

class Equitas extends Bank{
     int getRateOfInterest(){
        return 5;
    }
}

class Axis extends Bank{
     int getRateOfInterest(){
        return 9;
    }
}

class RuntimePolyEx{
    public static void main(String[] args){
        Bank s = new SBI();
        Bank e = new Equitas();
        Bank a = new Axis();

System.out.println("The Rate of Interest in SBI Bank is "+s.getRateOfInterest());
System.out.println("The Rate of Interest in Equitas Bank is "+e.getRateOfInterest());
System.out.println("The Rate of Interest in Axis Bank is "+a.getRateOfInterest());
    }



}