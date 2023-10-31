import React from 'react'

// global variables
let x = 21;
const y = 123;
let title = "Welcome to react";
let isAdmin = true;
const user = {
    name: 'Patil',
    age : '22',
    email : 'patil29@gmail.com'
}
const fruits = ['apple','orange','mango','banana']
function Ex1(props)  {
    // local variable
    let x = 5555;
    return (
        <div className='row'>
            <div className="col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12 fs-5">
                <h2 className='bg-secondary text-white text-center'>Example - 1</h2>
            </div>
            <div className="col">
                <div className="border  border-info lead p-3 text-center">
                    <h3>Varianle in local function component</h3>
                    <p><b>Varible value x : </b> {x}</p>
                    <p><b>Varible value y : </b> {y}</p>
                    <p><b>Product of x and y : </b> {x * y}</p>
                    <p><b>Varible value title : </b> {title}</p>
                    <p><b>Varible value isAdmin : </b> {isAdmin}</p>
                    {/* <p><b>Varible value x > y : </b> {x>y?"say ture":"say false"}</p> */}
                    <p><b>Varible value isAdmin : </b> {isAdmin?"say ture":"say false"}</p>
                    {/* <p><b>Object : </b> {user}</p> */}
                    <p><b>Object Name : </b> {user.name}</p>
                    <p><b>Object Email : </b> {user.email}</p>
                    <p><b>Fruits array : </b> {fruits}</p>
                    <p><b>Fruits array[1] : </b> {fruits[1]}</p>
                    <div>
                        {
                            fruits.map((item,index)=>{
                                return <h4 key={index}>fruits[{index}] : {item}</h4>    
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ex1