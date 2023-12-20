export const ConvertDate = (date : string)=>{
    /**
     * 12/20 날짜 표시가 오늘로 표시되서 확인해보니 Date에 인수로 나노초를 넣어야하는데 그냥 초로 넣어서 생기는 문제였다 
     * *1000을 해줘 나노초로 변환해서 수정
     */
    const convertedDate =new Date(Number(date)* 1000).toLocaleString().trim().slice(0,12)
    return convertedDate;
}


export const GetElapsedTime = (date: string) =>{
    /**
     * 12/19 불러온 데이터가 작성된시간과 지금의 차이를 계산해 텍스트로 표시
     */
    const sec = 1 ;
    const min = sec * 60 ; 
    const hour = min * 60 ;
    const day = hour * 24 ; 
    let now = new Date().getTime();
    let createdAt = new Date(date).getTime();
    const elapsedTime = Math.trunc((now-createdAt)/1000);
    
    let elapsedText = '';
    if (elapsedTime < sec + 10){
        elapsedText = '방금 전';
    } else if (elapsedTime < min){
        elapsedText = elapsedTime +'초 전';
    } else if (elapsedTime < hour){
        elapsedText = Math.trunc(elapsedTime /min)+'분 전'
    } else if (elapsedTime < day){
        elapsedText = Math.trunc(elapsedTime /hour)+'시간 전'
    } else {
        elapsedText = Math.trunc(elapsedTime /day)+'일 전'
    } 
    return elapsedText
}