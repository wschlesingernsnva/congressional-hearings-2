import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import pageList from "./pageList.js";

import "./index.css";
import chakraTheme from "./chakraTheme.js";

const BASE_URL = process.env.PUBLIC_URL;

const router = createBrowserRouter(
	pageList.map((thisPage) => ({
		path: thisPage.route,
		element: <thisPage.element />,
		loader: async () => {
			window.scrollTo(0, 0);
			return null;
		},
	})),
	{ basename: BASE_URL }
);

export default function App() {
	return (
		<ChakraProvider theme={chakraTheme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
}
