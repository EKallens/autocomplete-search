import Searcher from './components/Searcher';
import CountryProvider from './context/CountryContext';
import './styles/styles.scss';

function App() {
  return (
    <CountryProvider>
      <div className="container mt-5">
        <Searcher />
      </div>
    </CountryProvider>
  );
}

export default App;