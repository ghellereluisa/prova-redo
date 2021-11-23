import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../App';

test('Deve renderizar agenda de contatos', () =>{
    render (<Home />)
    const homeElement = screen.getAllByTestId('rout-test');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent('Agenda de contatos');
})