import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../firebase"
import { ITag } from "../../../types/blog";

export const GetTags = async()=>{
    const dateRef = collection(db,'blog','content','Tag');

    const querySnapshot = await getDocs(dateRef)
    return querySnapshot.docs.map(doc => doc.data() as ITag );
}