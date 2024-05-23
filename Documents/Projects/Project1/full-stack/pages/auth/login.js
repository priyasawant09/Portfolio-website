import React from 'react';
import {FcGoogle} from "react-icons/fc";
import styles from './login.module.css';
import {signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
import {auth} from  '../../utlis/firebase';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import {useAuthState} from 'react-firebase-hooks/auth';

export default function Login() {
    const route = useRouter();
    const  [user, loading] = useAuthState(auth);
    //sign with Google

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async ()=>{
        try{
            const result = await signInWithPopup(auth,googleProvider);
            route.push("/");
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        if(user){
            route.push("/");
        }else{
            console.log("login");
        }
    },[user]);




  return (
    <div className={styles.login}>
      <h2 className={styles.loginTitle}>Join Today</h2>
      <div className={styles.login1}>
        <h3 className={styles.loginSubtitle}>Sign in with one of the providers</h3>
        <button onClick={GoogleLogin}
        className={styles.loginButton}>
            <FcGoogle className='google-icon'/>
            Sign in with Google</button>
      </div>
    </div>
  );
}