import CopyButton from "./components/CopyButton";
import './index.css'

function App() {

  const array = ['testeUm', 'testeDois', 'testeTres']

  return (
    <>
      {array.map((e) => <CopyButton key={e} text={e} />)}
      <CopyButton text="Testando o texto copiado" />
    </>
  );
}

export default App;
