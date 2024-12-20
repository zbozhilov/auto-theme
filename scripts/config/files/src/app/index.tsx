import { createRoot } from '@wordpress/element';
import App from './App';

const appContainer = document.getElementById('app');

if (!appContainer) {
    console.warn('App container not found');
} else {
    const root = createRoot(appContainer);
    root.render(<App />);
}