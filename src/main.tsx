import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import { BoardProvider } from "./providers/boards/BoardProvider";
import { ListProvider } from "./providers/lists/ListProvider";
import { TaskProvider } from "./providers/tasks/TaskProvider";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
	<Theme>
		<BoardProvider>
			<ListProvider>
				<TaskProvider>
					<RouterProvider router={router} />
				</TaskProvider>
			</ListProvider>
		</BoardProvider>
	</Theme>
);
