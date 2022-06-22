import produce from "immer";

const TretmentInSecrenInitialState={
    
    TretmentForCurentUser: [], AllTretment:[]
}

export const TretmentInSecrenReducer=produce((state, action) => {

    switch(action.type)
    {
        case 'LOAD_TRETMENT_FOR_USER':{
            debugger
            state.TretmentForCurentUser=action.payload;
            break;
        }
        case 'LOAD_TRETMENT':{
            debugger
            state.AllTretment=action.payload;
            break;
        }
    }
}, TretmentInSecrenInitialState)