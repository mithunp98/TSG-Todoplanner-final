import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, waitFor, screen, getByRole } from '../../../utils/test-utils';
import Header from '../header';

jest.mock('../../../utils/authProvider', () => {
    const originalModule = jest.requireActual('../../../utils/authProvider');
    return {
        __esModule: true,
        ...originalModule,
        authProvider: () => ({
            decodedIdToken: {
                groups: ['az-vs01-dev-smicadmin', 'az-vs01-dev-smicread'],
            },
        }),
    };
});

test('Header', async () => {
    render(<Header />);
});

test('Header', async () => {
    render(<Header />);
    expect(screen.getByRole('header'));
    expect(screen.getByRole('logo'));
    expect(screen.getByRole('header')).toHaveTextContent('SMIC Maintenance');
    expect(screen.getAllByRole('path-change'));
    expect(screen.getByRole('header-tab'));
    expect(screen.getByRole('headerUserName'));
    fireEvent.mouseOver(screen.getByRole('headerUserName'));
    fireEvent.mouseOut(screen.getByRole('headerUserName'));
    expect(screen.getByRole('headerItem'));
    fireEvent.click(screen.getByRole('headerItem'));
    expect(screen.getAllByRole('menu'));
    const menu = screen.getAllByRole('menu');
    fireEvent.click(menu[0]);
    const logo: HTMLElement = screen.getByTestId('logo');
    fireEvent.click(logo);
    expect(screen.getByRole('logout'));
    fireEvent.click(screen.getByRole('logout'));
});
