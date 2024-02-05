import React from 'react'

class Info extends React.Component{

    constructor(props){
        super(props)
        console.log("info constructor")
    }

    componentDidMount(){
        console.log("Info did mount")
    }

    render(){
        console.log("info render")
        const {name, location} = this.props
        return (
            <>
            <h2>{name}</h2>
            <h3>Loc: {location}</h3>
            </>
        )
}
} 


export default Info