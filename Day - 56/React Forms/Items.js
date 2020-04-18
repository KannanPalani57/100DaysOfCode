class Items extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            items: [
                { name: "Tomato" ,qty: "1Kg"},
                { name: "Potato", qty: "3Kg"}
            ]
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(item){
        this.setState(state =>({
            items: [...state.items, item]
        }))
    }
    renderItems(){
       return  this.state.items.map(item => {
            return <ul>  
                <li>Item Name : {item.name}</li>
                <li>Quantity : {item.qty}</li>
            </ul>
        })
    }
    items(){
        return <h1>Helo</h1>
    }

    render(){
        return(
            <div>
            <h1>Shopping List</h1>
        
            {this.renderItems()}

            <ShoppingList className = "element" addItem = {this.addItem}/>
            
            </div>
        )
    }
}