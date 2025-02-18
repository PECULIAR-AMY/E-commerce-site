import { createRoot } from 'react-dom/client';  // Import createRoot for React 18
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import { store } from "./store.js";

// Use createRoot instead of ReactDOM.render()
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
