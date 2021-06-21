import { RESET } from "../constants/constants";


const initial_state: any = {
};

const questions = (state = initial_state, action: any) => {
    switch (action.type) {
        case RESET: {
            return
        }
        default:
            return state;
    }
};

export default questions;