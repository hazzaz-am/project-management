import { useReducer } from "react";
import { taskReducer } from "../../reducers/taskReducer";
import { TasksContext } from "./useTasksContext";

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
	const [tasks, dispatchTasksActions] = useReducer(taskReducer, []);
	return (
		<TasksContext.Provider value={{ tasks, dispatchTasksActions }}>
			{children}
		</TasksContext.Provider>
	);
};
