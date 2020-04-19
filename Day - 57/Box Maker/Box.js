
class Box extends React.Component{
    render(){
        const style = {
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: this.props.color,
        }
        return(
            <div>
            <div style = {
                  style
             }>
            </div>
            
               </div>
        )
    }
}