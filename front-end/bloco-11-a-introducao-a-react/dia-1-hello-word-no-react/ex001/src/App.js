/* Exercício 1
1 - Crie uma lista de tarefas simples seguindo os passos abaixo:
2 - insira a função a seguir acima do seu App :
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
3 - agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
4 - por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .
*/

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myTasks = ['Este é o meu exercício número 1.', 'O próximo é o exercício 2.', 'E depois farei o exercício 3.'];

const App = () => myTasks.map((task) => Task(task));

export default App;
