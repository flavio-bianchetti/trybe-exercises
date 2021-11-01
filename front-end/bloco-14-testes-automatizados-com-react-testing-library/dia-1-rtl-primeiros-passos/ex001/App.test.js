import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica se a palavra "Carregando" é renderizada na tela enquanto a aplicação é iniciada.', () => {
  render(<App />);
  const loading = screen.getByText(/carregando/i);
  expect(loading).toBeInTheDocument();
});

test('Usando assincronicidade, escreva um teste que verifica se o jogo com o texto Minecraft é renderizado na tela após a saída do carregando.', async () => {
  render(<App />);
  const findText = await screen.findByText("Minecraft");
  expect(findText).toBeInTheDocument();
});

test('Na home do projeto, após o carregamento da lista de jogos, clique no link Ver detalhes do segundo jogo da lista. E verifique se a tela de detalhes exibe as informações Release Year e Sales, do jogo correspondente.', async () => {
  render(<App />);
  await waitForElementToBeRemoved(() =>
    screen.getByText(/carregando/i),
  );

  const links = await screen.findAllByText('Ver detalhes');
  userEvent.click(links[1]);

  const releaseYear = await screen.findByText("Release Year: 2013");
  const sales = await screen.findByText("Sales: 115.000.000");
  
  expect(releaseYear).toBeInTheDocument();
  expect(sales).toBeInTheDocument();

  //Bônus: Escreva um teste que verifica se quando clicado no botão voltar na tela de detalhes após o carregando, é renderizada a lista de jogos.

  const link = await screen.findByText('Voltar');
  userEvent.click(link);

});
