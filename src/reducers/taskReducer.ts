export type TaskType = {
	id: string;
	title: string;
	listId: string;
	boardId: string;
};

enum TaskActionTypes {
	CREATE_TASK = "CREATE_TASK",
	UPDATE_TASK_NAME = "UPDATE_TASK_NAME",
	REMOVE_TASK = "REMOVE_TASK",
	CHANGE_LIST_ID_OF_TASK = "CHANGE_LIST_ID_OF_TASK",
	CHANGE_BOARD_ID_OF_TASK = "CHANGE_BOARD_ID_OF_TASK",
}

type CREATE_TASK_ACTION = {
	type: typeof TaskActionTypes.CREATE_TASK;
	payload: {
		id: string;
		title: string;
		boardId: string;
		listId: string;
	};
};

type UPDATE_TASK_NAME_ACTION = {
	type: typeof TaskActionTypes.UPDATE_TASK_NAME;
	payload: { id: string; title: string };
};

type REMOVE_TASK_ACTION = {
	type: typeof TaskActionTypes.REMOVE_TASK;
	payload: { id: string };
};

type CHANGE_LIST_ID_OF_TASK_ACTION = {
	type: typeof TaskActionTypes.CHANGE_LIST_ID_OF_TASK;
	payload: { listId: string; taskId: string };
};

type CHANGE_BOARD_ID_OF_TASK_ACTION = {
	type: typeof TaskActionTypes.CHANGE_BOARD_ID_OF_TASK;
	payload: { boardId: string; taskId: string };
};

export type TaskAction =
	| CREATE_TASK_ACTION
	| UPDATE_TASK_NAME_ACTION
	| REMOVE_TASK_ACTION
	| CHANGE_LIST_ID_OF_TASK_ACTION
	| CHANGE_BOARD_ID_OF_TASK_ACTION;

export const taskReducer = (
	tasks: TaskType[] = [],
	action: TaskAction
): TaskType[] => {
	switch (action.type) {
		case TaskActionTypes.CREATE_TASK: {
			const newTask: TaskType = {
				id: action.payload.id,
				title: action.payload.title,
				boardId: action.payload.boardId,
				listId: action.payload.listId,
			};
			return [...tasks, newTask];
		}

		case TaskActionTypes.UPDATE_TASK_NAME: {
			const updatedTasks = tasks.map((task: TaskType) => {
				if (task.id === action.payload.id) {
					return { ...task, title: action.payload.title };
				}
				return task;
			});
			return updatedTasks;
		}

		case TaskActionTypes.REMOVE_TASK: {
			return tasks.filter((task: TaskType) => task.id !== action.payload.id);
		}

		case TaskActionTypes.CHANGE_LIST_ID_OF_TASK: {
			const updatedTasks = tasks.map((task: TaskType) => {
				if (task.id === action.payload.taskId) {
					return { ...task, listId: action.payload.listId };
				}
				return task;
			});
			return updatedTasks;
		}

		case TaskActionTypes.CHANGE_BOARD_ID_OF_TASK: {
			const updatedTasks = tasks.map((task: TaskType) => {
				if (task.id === action.payload.taskId) {
					return { ...task, boardId: action.payload.boardId };
				}
				return task;
			});
			return updatedTasks;
		}

		default: {
			return tasks;
		}
	}
};
