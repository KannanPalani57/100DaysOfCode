

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            width: "", height: "", color: "",
          
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }
   
    handleSubmit(e){
        e.preventDefault();
       
        this.props.items(this.state);
        this.setState({
            width: "",
            height: "",
            color: "",
        })
    }
 

    render(){
        return(
                <div>
                    <h3>Box Generator</h3>
       
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "height">Height: </label>
                    <input type = "text" 
                    name = "height"
                    value = {this.state.height}
                    onChange = {this.handleChange}
                    placeholder = "Specify a Height" />

                    <label htmlFor = "width">Width: </label>
                    <input type = "text" 
                    name = "width"
                    value = {this.state.width}
                    onChange = {this.handleChange}
                    placeholder = "Specify a width" />

                <label htmlFor = "color">Background Color: </label>
                    <input type = "text" 
                    name = "color"
                    value = {this.state.color}
                    onChange = {this.handleChange}
                    placeholder = "Specify a Background Color" />

                <button>Add Box!</button>
                </form></div>
        )
    }
}