class Bank{
    int getRateOfInterest(){
        return 0;
    }
}

class SBI{
     int getRateOfInterest(){
        return 8;
    }
}

class Equitas{
     int getRateOfInterest(){
        return 5;
    }
}

class Axis{
     int getRateOfInterest(){
        return 9;
    }
}

class Access{
    public static void main(String[] args){
        SBI s = new SBI();
        Equitas e = new Equitas();
        Axis a = new Axis();

System.out.println("The Rate of Interest in SBI Bank is "+s.getRateOfInterest());
System.out.println("The Rate of Interest in Equitas Bank is "+e.getRateOfInterest());
System.out.println("The Rate of Interest in Axis Bank is "+a.getRateOfInterest());
    }



}