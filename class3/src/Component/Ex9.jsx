import React from "react";
class Ex9 extends React.Component{
    // constructor(props){
    //     super(props)
    // }  
    render(){
        const {img,name,lorem} = this.props;
        return(
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 className="bg-warning text-center p-2 fs-1 text-white">React Class</h2>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4 shadow mt-2 p-2">
                        <img src={img} className="img-fluid" alt="" />
                        <p>{name}</p>
                        <p>{this.props.lorem}</p>
                        <button className="btn btn-danger">Show More</button>
                    </div>
            </div>
        )
    }
}
export default Ex9;