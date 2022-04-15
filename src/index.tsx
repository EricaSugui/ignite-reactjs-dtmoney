import React from 'react';
import { createRoot } from 'react-dom/client'
import { createServer } from 'miragejs';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container!)

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ]
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);