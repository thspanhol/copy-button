import CopyButton from "./components/CopyButton";
import './index.css'

function App() {

  const array = ['testeUm', 'testeDois', 'testeTres']

  return (
    <div className="page">
      {array.map((e) => <CopyButton key={e} text={e} />)}
      <CopyButton text="Testando o texto copiado" />
    </div>
  );
}

export default App;
