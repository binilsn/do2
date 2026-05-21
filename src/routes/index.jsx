import { createHashRouter } from "react-router";
import App from "../App";
import Container from "../components/Container";
import AppForm from "../components/AppForm";

const routes = createHashRouter([
	{
		path: "/",
		Component: Container,
		children: [
			{ path: "", Component: App },
			{ path: "new", Component: AppForm },
		],
	},
]);

export default routes;
