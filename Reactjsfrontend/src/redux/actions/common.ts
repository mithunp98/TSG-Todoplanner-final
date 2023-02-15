import { AnyAction, Dispatch } from 'redux';
import { API_CALL, UPDATE_COUNT } from './types';
import { handleError } from '../../utils/handle-error';
import axios from '../../utils/interceptors';

export const updateCount = () => async (dispatch: Dispatch<AnyAction>) => {
    if (!(window as any).isMockData) {
        try {
            dispatch({
                type: UPDATE_COUNT
            });
        } catch (error) {
            handleError(error);
        }
    } else {
        dispatch({
            type: UPDATE_COUNT
        });
    }
};

export const sampleApi = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.get('http://localhost:4000');
        dispatch({
            type: API_CALL,
            payload: response.data.data,
        });
        return response.data.data;
    } catch (err: any) {
        handleError(err);
    }
};