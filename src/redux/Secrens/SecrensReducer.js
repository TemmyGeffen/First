import produce from "immer";

const SecrensInitialState={
    
    SecrenseForCurentUser: []
}

export const SecrensReducer=produce((state, action) => {

    switch(action.type)
    {
       
        case 'LOAD_ALL_SECRENS_FOR_USER':{
            debugger
            state.SecrenseForCurentUser=action.payload;
            break;
        }
    }
}, SecrensInitialState)