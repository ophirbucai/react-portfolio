import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './assets/style/main.scss';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <AppRouter />
)
