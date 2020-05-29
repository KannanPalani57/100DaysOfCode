import React, { Component } from 'react'


class ClientRoute extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: "",
        }
    }
    handleClick(newPage){
        this.setState( {
            page: newPage
        })
    }
    renderPage(){
        if(this.state.page === "about"){
            return <About />
        }
        if(this.state.page === "contact"){
            return <Contact />
        }
        if(this.state.page === "home"){
            return <Home />
        }
    }
    render(){  
    return (
        <div>
        <nav>
        <a onClick = {() => this.handleClick("home")}>Home</a>
        <a onClick = {() => this.handleClick("contact")}>Contact</a>
            <a onClick = {() => this.handleClick("about")}>About</a>
        </nav>
         {this.renderPage()}
    </div>
      )
  }
}

class About extends Component{
    render(){
     return(
     <div>
         <h2>Dog Page</h2>
     </div>
     )
    }
 }


export default ClientRoute;


class Home extends Component{
    render(){
     return(
         <div>
         <h2>Home Page</h2>
         </div>
     )
    }
 }


 class Contact extends Component{
    render(){
     return(
         <div>
         <h2>Contact Page</h2>
         </div>
     )
    }
 }