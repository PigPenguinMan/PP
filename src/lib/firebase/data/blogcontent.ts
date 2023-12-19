import { doc,getDocs, getDoc, collection, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { IBlogCardContentProps, IBlogCardProps } from '../../../types/blog'

export const FetchBlogData = async () => {

    const dataRef = collection(db,'blog','content','c_0001')


    // 데이터 불러오기
    const querySnapshot = await getDocs(dataRef)
    
    

    return querySnapshot.docs.map(doc => doc.data() as IBlogCardContentProps );
    
    
    // const docSnap = await getDoc(dataRef);
    // if(docSnap.exists()){
    //     return docSnap.data();
    // }


}
 

export const FetchClickedData = async (Id: string )=>{
    const dataRef = collection(db,'blog','content','c_0001');
    const q = query(dataRef , where(Id,'==',true));
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map(doc => doc.data() as IBlogCardContentProps )


}



export const SetBlogData = async ()=>{

    // let blogDataForm = {
    //     Created_At : ; 
    //     Updated_At? : ; 
    //     Title : ; 
    //     MainText : ; 
    //     Reply :  ; 
    // }
 


}