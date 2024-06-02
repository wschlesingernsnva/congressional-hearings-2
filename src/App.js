import "./App.css";

import Main from "./Main.js";

import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<Main />
			</div>
		</ChakraProvider>
	);
}
