import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router";
import routes from "./routes/index.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>,
);
