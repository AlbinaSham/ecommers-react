import React from 'react';
import SignIn from '../../components/signIn/singIn';
import SignUp from '../../components/signUp/signUp';



import "./signInAndsignUp.css";


const SignInAndSignUp = () =>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
            
        </div>
    )
}

export default SignInAndSignUp;