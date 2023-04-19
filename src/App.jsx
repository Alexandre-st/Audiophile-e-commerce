import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/Header';
import './styles/index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
