import { AnyAction } from 'redux';
import { UPDATE_COUNT } from '../actions/types';
import { AppState } from '../store';

export interface ICommonReducer {
    count: number
}

export const commonReducerInit: ICommonReducer = {
    count: 0
};

const commonReducer = (state = commonReducerInit, action: AnyAction): AppState => {
    switch (action.type) {
        case UPDATE_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
    }
    return state;
};

export default commonReducer;
