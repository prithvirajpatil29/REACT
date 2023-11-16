import React, { Component } from 'react';

class Ex4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            steps : 0
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        alert('clickHandler');
        this.setState({
            steps : this.state.steps +1
        });
    }
    render() {
        return (
            <div className='row'>
                <div className="col-12 text-center">
                    <div className="lead my-3 p-3 border">
                        <p><b>6) Class component event listner </b></p>
                        <p>We have to call the setState method (for class component) or useState hook (for functional component) inside the onclick handler</p>
                        <p><b>Steps : </b>{this.state.steps}</p>
                        <button className='btn btn-danger' onClick={this.clickHandler}>Click Me</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ex4;