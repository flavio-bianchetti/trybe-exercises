import { render, screen } from '@testing-library/react';
import App from '../App';
import responseAPI from './mocks';
import userEvent from '@testing-library/user-event';

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseAPI),
    });
    
    render(<App/>)
  })
  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', async () => {
    const titleCard = await screen.findByRole('heading', {name: /Rick Sanchez/i, level: 3});
    expect(titleCard).toBeInTheDocument();
  })

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    const inputEl = screen.getByRole('textbox');
    const buttonEl = screen.getByRole('button');

    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
    const inputEl = screen.getByRole('textbox');
    const buttonEl = screen.getByRole('button');

    userEvent.type(inputEl, 'Smith');
    userEvent.click(buttonEl);

    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(4);
  })

})
