import { types } from "../types/types"

//Actions de Error
export const setErrorAction = (error) => {
    return{
        type: types.uisetError,
        payload: error
    }
}

export const removeError = () => {
    return{
        type: types.uiRemoveError,
    }
}
//Actions de loading
export const startLoading = () =>{
    return{
        type: types.uiStartLoading,
        
    }
}
export const finishLoading = () =>{
    return{
        type: types.uiFinishLoading
    }
}