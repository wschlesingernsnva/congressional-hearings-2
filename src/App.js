import { ChakraProvider } from "@chakra-ui/react";

import theme from "./chakraTheme.js";

import Main from "./Main.js";

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<Main />
		</ChakraProvider>
	);
}
