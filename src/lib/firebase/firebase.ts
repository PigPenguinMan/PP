// 12/16 파이어베이스 연동
// Ref https://support.google.com/firebase/answer/7015592
import { initializeApp} from 'firebase/app' ;
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,

    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
  
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  
    appId: process.env.REACT_APP_FB_APP_ID,
  
    measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
  
    // 채팅에 사용할 실시간 데이터 베이스 url 
    databaseURL : process.env.REACT_APP_FB_DATABASE_URL
}


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { app,db }; 


