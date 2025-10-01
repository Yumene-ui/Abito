import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { Home } from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Product } from './pages/Product';
import { Layout } from './layout/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/product/:id',
				element: <Product />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
