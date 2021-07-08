import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function App() {
	const { t } = useTranslation();
	return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<title>React Awesome Boilerplate!</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>

			<h1>{t('title')}</h1>
			<h2>Start editing to see some magic happen!</h2>
		</div>
	);
}
