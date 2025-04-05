import { createBrowserRouter } from "react-router";
import App from "../app/App";
import BoardsPage from "../pages/boards";
import BoardDetailsPage from "../pages/board-details";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <BoardsPage />,
			},
			{
				path: "/boards/:boardId",
				element: <BoardDetailsPage />,
			},
		],
	},
]);
