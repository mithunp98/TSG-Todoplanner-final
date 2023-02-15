import { envVariables } from '../mocks/common-mock';
import { mockPromise } from '../utils/mock-promise';

export const envVariablesAPI = () => {
    return mockPromise(envVariables);
};
