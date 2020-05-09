
class Form extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           username: "",
           email: "",
           password: "",
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleSubmit(e){
     e.preventDefault();
     alert(`You typed ${this.state.username}`);
     this.setState({username: ""})
  }

   handleChange(evt){
       this.setState({[evt.target.name]: evt.target.value});
   }


    render(){
        return(
           <form onSubmit = {this.handleSubmit}>
               <label className = "element" htmlFor = "username">UserName</label>
               <input type = "text" value = {this.state.username}
               id = "username" 
                 onChange = {this.handleChange} name = "username"
                 placeholder = "Enter a UserName"/>
               
               <label htmlFor = "email">Email</label>
               <input type = "email" value = {this.state.email} 
                 id = "email"
                 onChange = {this.handleChange} name = "email"
                 placeholder = "Enter a Email"/>
              
              <label htmlFor = "password">Password</label>
              <input type = "password" value = {this.state.password}
                 id = "password" 
                 onChange = {this.handleChange} name = "password"
                 placeholder = "Enter a Password"/>   

                 <button>Submit</button>
           </form>
        )
    }
}