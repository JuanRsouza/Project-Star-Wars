import React from 'react';
import testData from '../../cypress/mocks/testData';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando minha aplicação', () => { 
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
  })
  test('se os inputs estão aparecendo na tela', async () => {
    render(<App />);
  const test = await screen.findByRole('cell', {
    name: /tatooine/i
  });

    const inputFilter = screen.getByRole('textbox', {
      name: /filtro/i
    });

    const filterColumn = screen.getByTestId('column-filter')

    userEvent.type(inputFilter, 'Tatooine')  


    expect(inputFilter).toBeInTheDocument();
    expect(filterColumn).toBeInTheDocument();
    expect(inputFilter.value).toBe('Tatooine');
    expect(test).toBeInTheDocument(); 
  });
  test('se ao clicar no botão aparece filtrado', async () => {
    render(<App />);
    const planet = await screen.findByRole('cell', {
      name: /tatooine/i
    });
 
    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByRole('button', {
      name: /filtrar/i
    })
    expect(filterColumn).toBeInTheDocument();
    expect(filterComparison).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();

    userEvent.selectOptions(filterColumn, 'population')
    expect(filterColumn.value).toBe('population');

    userEvent.selectOptions(filterComparison, 'maior que')
    expect(filterComparison.value).toBe('maior que');

    userEvent.type(valueFilter, '30000')
    expect(valueFilter.value).toBe('030000');

    userEvent.click(buttonFilter)
    expect(planet).toBeInTheDocument();

    const view = screen.getByTestId('remove-population');
    expect(view).toBeInTheDocument();

    userEvent.click(view)
    expect(view).not.toBeInTheDocument();

  });

  test('teste se filtra da forma correta', async () => {
    render(<App />);
    const planet = await screen.findByRole('cell', {
      name: /tatooine/i
    });

    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByRole('button', {
      name: /filtrar/i
    })
    expect(filterColumn).toBeInTheDocument();
    expect(filterComparison).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();

    userEvent.selectOptions(filterColumn, 'population')
    expect(filterColumn.value).toBe('population');

    userEvent.selectOptions(filterComparison, 'menor que')
    expect(filterComparison.value).toBe('menor que');

    userEvent.type(valueFilter, '30000')
    expect(valueFilter.value).toBe('030000');

    userEvent.click(buttonFilter)

    const view = screen.getByTestId('remove-population');
    expect(view).toBeInTheDocument();

    userEvent.click(view)
    expect(view).not.toBeInTheDocument();


  });

  test('teste se filtra da forma correta', async () => {
    render(<App />);
    const planet = await screen.findByRole('cell', {
      name: /tatooine/i
    });

    const filterColumn = screen.getByTestId('column-filter');
    const filterComparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByRole('button', {
      name: /filtrar/i
    })
    expect(filterColumn).toBeInTheDocument();
    expect(filterComparison).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();

    userEvent.selectOptions(filterColumn, 'population')
    expect(filterColumn.value).toBe('population');

    userEvent.selectOptions(filterComparison, 'igual a')
    expect(filterComparison.value).toBe('igual a');

    userEvent.type(valueFilter, '30000')
    expect(valueFilter.value).toBe('030000');

    userEvent.click(buttonFilter)

    const view = screen.getByTestId('remove-population');
    expect(view).toBeInTheDocument();


    const buttonRemoveAll = screen.getByTestId('button-remove-filters');
    userEvent.click(buttonRemoveAll)
    expect(view).not.toBeInTheDocument();




  });
 
 }) 

