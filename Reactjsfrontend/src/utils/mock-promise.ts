export const mockPromise = <T>(response: T, timeout = 1000): Promise<T> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response);
        }, timeout);
    });
};
