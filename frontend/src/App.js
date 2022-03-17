import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import MainRoutes from './routes';

export default function App(){
  return(
    <BrowserRouter>
      <MainRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}