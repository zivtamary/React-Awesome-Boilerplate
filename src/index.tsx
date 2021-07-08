import { render } from 'react-dom';

// Main app
import App from 'app/App';

// Configure redux store
import { Provider } from 'react-redux';
import store from 'store/store';

// Set up translation i18n
import './i18n/config';

const rootElement = document.getElementById('root');
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
