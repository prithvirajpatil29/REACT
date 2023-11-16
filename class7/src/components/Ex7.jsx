import React, { Component } from 'react'

export default class Ex7 extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : 'Event Bind'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler = () => {
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
                    <b>9.Binding with help  </b>
                </p>
                <p><b>Message : </b>{this.state.message}</p>
                <button className='btn btn-info' onClick={this.clickHandler}>Click Me</button>
            </div>
        </div>
      </div>
    )
  }
}
