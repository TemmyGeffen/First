import product from 'immer';


//אוביקט המכיל את סוגי הטיפולים
const TypeTretmentStat={
    TypeTretment:[],
}


//פונקציה המכניסה את סוג הטיפול לתוך הסטור
export const TypeTretmentReducer = product((state, action)=>{
    debugger;
    switch(action.type) 
    {
        case 'LOAD_TYPETRETMENT':{state.TypeTretment = action.payload;
            break;}
    }

},TypeTretmentStat)