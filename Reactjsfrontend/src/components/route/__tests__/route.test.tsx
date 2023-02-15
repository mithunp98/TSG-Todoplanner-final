import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../utils/test-utils';
import Routes from '../route';
import { setTestEnv } from '../../../utils/interceptors';

beforeAll(() => {
    setTestEnv(true);
});
afterAll(() => {
    setTestEnv(false);
});

test('WSO Header - Render', () => {
    render(<Routes />);
});
