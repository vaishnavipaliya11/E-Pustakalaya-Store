export const getsearchProduct =(data,search)=>{
    if(search){
        return data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }
    return data
}