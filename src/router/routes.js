import About from '../pages/About';
import Play from '../pages/Play';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog'

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Play,
		key: 'Play',
		path: '/'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Blog,
		key: 'Blog',
		path: '/blog'
	}
];

export default routes;
