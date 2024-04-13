import ReactDOM from 'react-dom/client';
import { AppRouter } from './AppRouter.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>,
  );
