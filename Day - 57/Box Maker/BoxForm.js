
class BoxForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            boxes: [
               

            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);   
     }
    
      remove(id){
          this.setState({
              boxes: this.state.boxes.filter(box => box.id !== id)
          })
      }

    addItem(item){
       this.setState({
           boxes: [...this.state.boxes, item]
       })
    }


    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

 

    render(){
        const box = this.state.boxes.map((item, index) =>{
            return   <Box height = {item.height}
            key = {index}
            id = {index}
            removeBox = {() => this.remove(index)}
            width = {item.width} 
            color = {item.color} />
        })
        return (
            <section>
            <div className = "form">
                <Form items = {this.addItem}/> 
            </div>
            <div className = "box">
                {box}
            </div>
            </section>
            
        )
    }
}