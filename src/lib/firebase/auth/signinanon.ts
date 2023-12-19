// 12/16 파이어베이스 익명인증 
// Ref https://firebase.google.com/docs/auth/web/anonymous-auth?hl=ko&authuser=0

import {getAuth , signInAnonymously} from 'firebase/auth';
import { app } from '../firebase';




const auth = getAuth(app) ;
signInAnonymously(auth).then(()=>{

}).catch((error)=> {
    const errCode = error.code ; 
    const errMessage = error.message ; 
})

