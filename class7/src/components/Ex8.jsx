import React, { Component } from 'react';

class Ex8 extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : 'Event Bind'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    printMessage(){
        console.log("This is a message");
    }
    showAlert(){
        alert("Button was clicked")
    }
    clickHandler() {
        this.printMessage();
        this.showAlert();
    }
    render() {
        return (
            <div className='row'>
            <div className="col-12 text-center">
                <div className="lead my-3 p-3 border">
                    <p>
                        <b>10.Call multiple functions inside on click event handler  </b>
                    </p>
                    <p><b>Message : </b>{this.state.message}</p>
                    <button className='btn btn-info' onClick={this.clickHandler}>Click Me</button>
                    {/* <button className='btn btn-info' onClick={this.clickHandler.bind(this)}>Click Me</button> */}

                </div>
            </div>
          </div>
        );
    }
}

export default Ex8;
