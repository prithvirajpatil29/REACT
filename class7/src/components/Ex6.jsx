import React, { Component } from 'react';

class Ex6 extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : 'Event Bind'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        // alert('clickHandler');
        this.setState({
            message : 'change state'
        });
    }
    render() {
        return (
            <div className='row'>
        <div className="col-12 text-center">
            <div className="lead my-3 p-3 border">
                <p>
                    <b>7.Binding by passing arrow function inside the event listner </b>
                </p>
                <p><b>Message : </b>{this.state.message}</p>
                <button className='btn btn-info' onClick={this.clickHandler.bind(this)}>Click Me</button>
            </div>
        </div>
      </div>
        );
    }
}

export default Ex6;
