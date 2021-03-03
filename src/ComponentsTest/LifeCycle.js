import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("from constructor")
        this.state={
            firstName:'user',
            lastName: null,
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log('from get derived')
    //     if(props.firstName){
    //         return(
    //             firstName: props.firstName,
    //         );
    //     }
       return null;
    }

    componentDidMount(){
        console.log('from did mount');
        return null;
        
    }
    OnClick=()=>{
        this.setState({
            firstName: 'masoud',
        });
    }
    shouldComponentUpdate(){
        console.log('should component update');
        return true;
    }
    componentWillUnmount(){
        console.log("test will un mount")
    }
    render() { 
        
        console.log('render')
        return (
        <div>
            welcome to {this.state.firstName}
            <hr />
            <button onClick={this.OnClick}>click here
            </button>
        </div>
        );
    }
    getSnapshotBeforeUpdate(){
        console.log("snapshot");
        return null;
    }
}
 
export default LifeCycle;