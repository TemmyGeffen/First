import { combineReducers, createStore } from "redux";
import { MeetingReducer } from "./Meeting/MeetingReducer";
import  {UserReducer} from './User/UserReducer'
import {TypeTretmentReducer} from './TypeTretment/TypeTretmentReducer'
import { EmployeeReducer } from "./Employee/EmployeeReducer";
import { SecrensReducer } from "./Secrens/SecrensReducer";
import { TretmentInSecrenReducer } from "./TretmentInSecren/TretmentInSecrenReducer";

const reducers = combineReducers(
   {Users: UserReducer, Meeting: MeetingReducer, Tretment:TypeTretmentReducer, Employee:EmployeeReducer,
    Secrens:SecrensReducer, TretmentInSecrens:TretmentInSecrenReducer
  }
 )

 
 //יוצר סטור
export const store = createStore(reducers);

window.store=store;