import "./App.css";

import Main from "./Main.js";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakraTheme.js";

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<div className="App">
				<Main />
			</div>
		</ChakraProvider>
	);
}
