import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

function Main() {
	return (
		<Switch>
			<Route exact path="/" component={Home}></Route>
		</Switch>
	);
}

export default Main;
