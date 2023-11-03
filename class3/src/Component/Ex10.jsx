import React from "react";
class Ex10 extends React.Component{
    // constructor(props){
    //     super(props)
    // }  
    static defaultProps = {
        img: "https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name:"Parent Card",
        lorem:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quibusdam sequi recusandae voluptatem officia perspiciatis ratione quaerat iure dolorem corporis sed voluptatibus quisquam, similique molestiae obcaecati unde labore harum omnis!"
    }
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
// Ex10.defaultProps = {
//     img: "https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name:"Parent Card",
//     lorem:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quibusdam sequi recusandae voluptatem officia perspiciatis ratione quaerat iure dolorem corporis sed voluptatibus quisquam, similique molestiae obcaecati unde labore harum omnis!"
// }
export default Ex10;