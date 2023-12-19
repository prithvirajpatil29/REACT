import React, {useState} from "react";
import { Omit, omit } from "lodash";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL ='http://localhost:4000'
const randId = () => {
    return Math.floor(Math.random() * 10000);
}
const initState = {
    id: randId(),
    name : "",
    email : "",
    image : "",
    mobile : "",
    address  : ""
};
// useForm = > form validate custom hook
function UserForm(){
    const [contact, setContact] = useState(initState);
    const [errors, setError] = useState({});

    //useNavigate Reference, interval
    const navigate = useNavigate();
    // Error Printing
    const errPrint = (prop,msg) => {
        setError({...errors , [prop]:msg});
    }

    const validate = (event,name,value) => {
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errPrint(name,"Name field must be filled");
                } else if (value.length < 3){
                    errPrint(name, 'Name at least 3 letter')
                } else if(!new RegExp(/^[a-zA-Z\s]+$/).test(value)){
                    errPrint(name, 'Invalid Name')
                } else{
                    let newOb = omit(errors, name);
                    setError(newOb)
                }
                break;
            case 'email':
                if (value.length === 0) {
                    errPrint(name,"Email field must be filled");
                }else if(!new RegExp(/^[a-zA-Z0-9\S]+@[a-zA-Z0-9\S]+\.[a-zA-Z\S]/).test(value)){
                    errPrint(name, 'Invalid Email')
                } 
                else{
                    let newOb = omit(errors, name);
                    setError(newOb)
                }
                break;

            case 'image':
                if(value.length === 0){
                    errPrint(name, "Image filed must be filled.")
                } else if(!new RegExp(/^\S+$/).test(value)){
                    errPrint(name, "Invalid Image URL");
                } else{
                    let newOb = omit(errors,name);
                    setError(newOb)
                }
                break;

            case "mobile":
                if(value.length === 0){
                    errPrint(name, "Mobile filed must be filled.")
                } else if(!new RegExp(/^[6-9]\d{9}/).test(value)){
                    errPrint(name, "Invalid Image URL");
                } else{
                    let newOb = omit(errors,name);
                    setError(newOb)
                }
                break;

            case "address":
                if(value.length === 0){
                    errPrint(name, "Address filed must be filled.")
                } else if(!new RegExp(/^([a-zA-Z0-9/\\''(),-/#\s]{2,255})$/).test(value)){
                    errPrint(name, "Invalid Address");
                } else{
                    let newOb = omit(errors,name);
                    setError(newOb)
                }
            default:
                break;
        }
    };

    const readValue = (e) => {
        // console.log("Input Value = ", e.target.name + "-" + e.target.value)
        const  {name,value} = e.target;
        validate(e, name,value);
        setContact({...contact, [name]:value});
    };

    // For Submit The value
    const submitHandler = async (e) => {
        e.preventDefault(); // avoide page refresh
        // console.log("New Contact = ",contact);
        if (Object.keys(errors).length===0 && Object.keys(contact).length !== 0) {
            console.log("New Contact = ",contact);
            await axios.post(`${baseURL}/contacts`, contact).then(res => {
                setContact(initState);
                toast.success('User Created');
                navigate('/')
            }).catch((err) => toast.error(err.message))
        } else {
            toast.error("Some errors are in form or filed are empty")
        }
    }

    return {
        contact,
        errors,
        readValue,
        submitHandler,
        setContact
    }
}

export default UserForm;