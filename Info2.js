import React from 'react'

class Info2 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            api:{}
        }
    }

    async componentDidMount(){
        const data = await fetch ("https://api.github.com/users/dattatretya")
        const json = await data.json()
        this.setState([
            this.state.api=json
        ])
    }

    render(){

        console.log("info 2 render")
        const {name, location} = this.props
        return (
            <>
            <h2>{name}</h2>
            <h3>Loc: {location}</h3>
            <h1>{this.state.api.login}</h1>
            </>
        )
}
} 


export default Info2