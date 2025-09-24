import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ApiProvider } from './features/products/provider/apiProvider.tsx';
import { ToastProvider } from './shared/provider/Toast.tsx';

async function enableMocking() {
  if (import.meta.env.MODE !== 'mock') {
    return;
  }

  const { worker } = await import('./mocks/browser.ts');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ToastProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ToastProvider>
    </React.StrictMode>
  );
});
