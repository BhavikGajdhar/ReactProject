export const onSubmit = (data) =>{
    return{
        type:"SUBMIT",
        payload : data
    }
}
export const onUpdate = (data) =>{
    return{
        type:"UPDATE",
        payload : data
    }
}
export const onDelete = (data) =>{
    return{
        type:"DELETE",
        payload : data
    }
}
export const onGetById = (data) =>{
    debugger
    return{
        type:"PATCH_VALUE",
        payload:data
    }
}