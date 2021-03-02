import React, { Component } from 'react';


class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString(),
            firstName:'masoud',
            lastName:'arabi',
        }
    }

    componentDidMount(){
        const timer = setInterval(()=>{
            this.setState({  time: new Date().toLocaleTimeString() })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    // onClickButton = (e) => {
    //     this.setState({
    //         firstName:'shiela',
    //         lastName:'pourali',
    //     });
    // }
    onChangeInput=(e)=>{
        this.setState({
            firstName:e.target.value,
        });
    }
   
    render() { 
        const {onClickButton, onChangeInput} = this;
        const {firstName,lastName } = this.state;
        return ( 
            <div style={{display:'flex', flexDirection:'column'}}>
                hello {firstName} {lastName}
                { this.state.time }
                <button onClick={onClickButton}>click here</button>
                <input value={firstName} onChange={onChangeInput}></input>
            </div>
         );
    }
}
 
export default Clock;