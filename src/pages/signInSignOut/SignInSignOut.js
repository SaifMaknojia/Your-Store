import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import './signInSignOut.scss';

const SignInSignOut = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignOut;
