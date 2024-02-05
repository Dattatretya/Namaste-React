import React from "react"
import Info from "./Info"
import Info2 from "./Info2"

class About extends React.Component{
    constructor (){
        super()
        this.state={
            count: 0,
            count2: 1
        }
    }
    render(){

        const {count} = this.state

        return(
            <>
            <h1>About</h1>
            <Info name="Datta" location="Gurgaon"/>
            <Info2/>
            <h3>Count 1: {count}</h3>
            <button onClick={()=>{
                this.setState ({
                    count: this.state.count + 1
                })
            }}>Count increase</button>
            </>
        )
    }
}

export default About