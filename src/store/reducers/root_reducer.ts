import { combineReducers } from 'redux';

//Import reducers

const root_reducer = combineReducers({
});

export default root_reducer;

export type Root_State = ReturnType<typeof root_reducer>