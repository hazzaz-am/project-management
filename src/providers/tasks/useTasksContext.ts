import { createContext, useContext } from "react";
import { TaskAction, TaskType } from "../../reducers/taskReducer";

type TasksContextType = {
	tasks: TaskType[];
	dispatchTasksActions: React.Dispatch<TaskAction>;
};

export const TasksContext = createContext<TasksContextType | undefined>(
	undefined
);

export const useTasksContext = () => {
	const context = useContext(TasksContext);
	if (!context) {
		throw new Error("useTasksContext must be used within a TasksProvider");
	}
	return context;
};
