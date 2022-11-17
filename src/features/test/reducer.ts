import { TEST_COUNT_INC } from "./testActions";

const initialState = {
    count: 5
}
export const testReducer = (state = initialState, action:any) => {
   switch (action.type) {
    case TEST_COUNT_INC:
        return {...state,count: state.count+action.data}   
    default:
        return state
   }
}