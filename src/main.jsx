import ReactDOM from 'react-dom/client';
import { App } from './components/App/App'
import { TodoProvider } from './components/Context/Context';

import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoProvider><App /></TodoProvider>);

