

class ShoppingList extends React.Component{
   
   constructor(props){
       super(props);
       this.state = {
            name: "", qty: ""
       }
       this.handleSubmit = this.handleSubmit.bind(this); 
       this.handleChange = this.handleChange.bind(this)  
    }
     handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state)    }
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }  
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
               <br></br>
          <label htmlFor = "name" >Name of The Item</label><br></br>
          <input type = "text"
           id = "name"
           name = "name"
           onChange= {this.handleChange}
           value = {this.state.name}
           placeholder = "Enter The Item Name" />
                <br></br>
               <label htmlFor = "quantity" >Quantity of The Item</label>
               <br></br>
                <input type = "text"
                id = "quantity"
                name =  "qty"               
                onChange= {this.handleChange}
                value = {this.state.qty}
                placeholder = "Enter The Item Name" />
                    <br></br>
                    <br></br>
                 <button                
                 >Insert Item!</button>
             </form>
        )
    }
}