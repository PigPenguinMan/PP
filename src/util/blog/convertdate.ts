export const ConvertDate = (date : string|undefined)=>{

    return new Date().toLocaleDateString(date).trim().slice(0,-1)
}