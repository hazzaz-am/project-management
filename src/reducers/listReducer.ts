type ListType = {
	id: string;
	title: string;
	boardId: string;
	tasks: string[];
};

enum ListActionTypes {
	CREATE_LIST = "CREATE_LIST",
	UPDATE_LIST_NAME = "UPDATE_LIST_NAME",
	CHANGE_BOARD_ID = "CHANGE_BOARD_ID",
	REMOVE_LIST = "REMOVE_LIST",
	ADD_TASK_ID_TO_LIST = "ADD_TASK_ID_TO_LIST",
	REMOVE_TASK_ID_FROM_LIST = "REMOVE_TASK_ID_FROM_LIST",
}

type CREATE_LIST_ACTION = {
	type: typeof ListActionTypes.CREATE_LIST;
	payload: {
		id: string; // id of the new board
		title: string; // title of the new board
		boardId: string; // id of the board to which the new board belongs
		tasks: string[]; // tasks of the new board
	};
};

type UPDATE_LIST_NAME_ACTION = {
	type: typeof ListActionTypes.UPDATE_LIST_NAME;
	payload: { id: string; title: string };
};

type REMOVE_LIST_ACTION = {
	type: typeof ListActionTypes.REMOVE_LIST;
	payload: { id: string };
};

type CHANGE_BOARD_ID_ACTION = {
	type: typeof ListActionTypes.CHANGE_BOARD_ID;
	payload: { boardId: string; listId: string };
};

type ADD_TASK_ID_TO_LIST_ACTION = {
	type: typeof ListActionTypes.ADD_TASK_ID_TO_LIST;
	payload: { listId: string; taskId: string };
};

type REMOVE_TASK_ID_FROM_LIST_ACTION = {
	type: typeof ListActionTypes.REMOVE_TASK_ID_FROM_LIST;
	payload: { listId: string; taskId: string };
};

type ListAction =
	| CREATE_LIST_ACTION
	| UPDATE_LIST_NAME_ACTION
	| REMOVE_LIST_ACTION
	| CHANGE_BOARD_ID_ACTION
	| ADD_TASK_ID_TO_LIST_ACTION
	| REMOVE_TASK_ID_FROM_LIST_ACTION;

export const listReducer = (lists = [], action: ListAction): ListType[] => {
	switch (action.type) {
		case ListActionTypes.CREATE_LIST: {
			const newList: ListType = {
				id: action.payload.id,
				title: action.payload.title,
				boardId: action.payload.boardId,
				tasks: [],
			};
			return [...lists, newList];
		}

		case ListActionTypes.UPDATE_LIST_NAME: {
			const updatedLists = lists.map((list: ListType) => {
				if (list.id === action.payload.id) {
					return { ...list, title: action.payload.title };
				}
				return list;
			});
			return updatedLists;
		}

		case ListActionTypes.REMOVE_LIST: {
			return lists.filter((list: ListType) => list.id !== action.payload.id);
		}

		case ListActionTypes.CHANGE_BOARD_ID: {
			const updatedLists = lists.map((list: ListType) => {
				if (list.id === action.payload.listId) {
					return { ...list, boardId: action.payload.boardId };
				}
				return list;
			});
			return updatedLists;
		}

		case ListActionTypes.ADD_TASK_ID_TO_LIST: {
			return lists.map((list: ListType) => {
				if (list.id === action.payload.listId) {
					return { ...list, tasks: [...list.tasks, action.payload.taskId] };
				}
				return list;
			});
		}

		case ListActionTypes.REMOVE_TASK_ID_FROM_LIST: {
			return lists.map((list: ListType) => {
				if (list.id === action.payload.listId) {
					return {
						...list,
						tasks: list.tasks.filter(
							(taskId) => taskId !== action.payload.taskId
						),
					};
				}
				return list;
			});
		}

		default: {
			return lists;
		}
	}
};
