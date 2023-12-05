import { ToastContainer, toast } from 'react-toastify';

const users = JSON.parse(localStorage.getItem('users')) || [];
console.log("user", users);

const registerUser = async (user) => {
    console.log("Register =", user);
  
    const extEmail = users.find((item) => item.email === user.email);
    const extMobile = users.find((item) => item.mobile === user.mobile);
    
    if (extEmail) {
        toast.warning(`${user.email} already exists`);
    } else if (extMobile) {
        toast.warning(`${user.mobile} already exists`);
    } else {
        users.push(user);
        saveUsers(users);
        toast.success("You have successfully registered");
        window.location.href = '/login';
    }
};

const saveUsers = (data) => {
    localStorage.setItem('users', JSON.stringify(data)); // Corrected the parameter here
};

const loginUser = async (userData) => {
    const extUser = users.find((item) => item.email === userData.email);
    if (!extUser) {
        toast.error(`${userData.email} doesn't exist`); 
    } else {
        if (extUser.password !== userData.password) {
            toast.error("Invalid email or password");
            toast.success("user Login success");
            window.location.href='/';
        } else {
            toast.warning("Password are not matched")
        }
    }
}

// Logout handler
const logoutUser = async () => {
    if(localStorage.getItem('loginStatus') == 'true'){
        localStorage.removeItem('loginStatus');
        toast.success('logout successfully')
        window.location.href = '/'
    }
}


export { registerUser, loginUser, logoutUser };