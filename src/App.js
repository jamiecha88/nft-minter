import './App.css';
import Minter from './Minter'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'

function App() {
  return (
    <ThirdwebProvider>
      <div className="App">
        <Minter></Minter>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
