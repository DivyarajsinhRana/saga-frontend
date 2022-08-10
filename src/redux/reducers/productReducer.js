import { set_products } from "../actions/actionType";

const intialState = {
    product:[]
};

const productReducer = (state=intialState,action) => {
    switch(action.type) {
        case set_products :
            state = {...state,product:action.payload}
            return state;
        default : return state;
    }   
}
export default productReducer;