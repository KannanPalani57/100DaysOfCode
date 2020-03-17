class Bank{
    private int acc_no;
    private String name,email;
    private float amount;
     //getters
    public int getAcc_No(){
        return acc_no;
    }
    public String getName(){
        return name;
    }
    public String getEmail(){
        return email;
    } 
    public float getAmount(){
        return amount;
    }
    //setters
    public void setName(String name){
        this.name = name;
    }
    public void setAcc_No(int acc_no){
        this.acc_no = acc_no;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setAmount(float amount){
        this.amount = amount;
    }

    public static void main(String[] args){
        Bank account = new Bank();
        account.setAcc_No(5555);
        account.setName("Kannan");
        account.setEmail("kannanpalani455@gmail.com");
        account.setAmount(5000);

        System.out.println(account.getAcc_No() + "\n"+ account.getName()+ "\n" + account.getEmail()+ "\n" + account.getAmount());
    }
}