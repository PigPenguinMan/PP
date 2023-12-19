import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";



const auth = getAuth(app);
onAuthStateChanged(auth,(user)=> {
    if (user) {
        // 유저가 로그인햇을때 
        const uid = user.uid
    } else {

    }
})