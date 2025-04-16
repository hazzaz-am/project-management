export type BoardType = {
	id: string;
	title: string;
	lists: string[];
	tasks: string[];
};

enum BoardActionTypes {
	CREATE_BOARD = "CREATE_BOARD",
	CHANGE_BOARD_TITLE = "CHANGE_BOARD_TITLE",
	REMOVE_BOARD = "REMOVE_BOARD",
	ADD_LIST_ID_TO_BOARD = "ADD_LIST_ID_TO_BOARD",
	REMOVE_LIST_ID_FROM_BOARD = "REMOVE_LIST_ID_FROM_BOARD",
	ADD_TASK_ID_TO_BOARD = "ADD_TASK_ID_TO_BOARD",
	REMOVE_TASK_ID_FROM_BOARD = "REMOVE_TASK_ID_FROM_BOARD",
}

type CreateBoardAction = {
	type: typeof BoardActionTypes.CREATE_BOARD;
	payload: string; // title of the new board
};

type ChangeBoardTitleAction = {
	type: typeof BoardActionTypes.CHANGE_BOARD_TITLE;
	payload: { id: string; title: string };
};

type RemoveBoardAction = {
	type: typeof BoardActionTypes.REMOVE_BOARD;
	payload: string; // board id
};

type AddListIdToBoardAction = {
	type: typeof BoardActionTypes.ADD_LIST_ID_TO_BOARD;
	payload: { boardId: string; listId: string };
};

type RemoveListIdFromBoardAction = {
	type: typeof BoardActionTypes.REMOVE_LIST_ID_FROM_BOARD;
	payload: { boardId: string; listId: string };
};

type AddTaskIdToBoardAction = {
	type: typeof BoardActionTypes.ADD_TASK_ID_TO_BOARD;
	payload: { boardId: string; taskId: string };
};

type RemoveTaskIdFromBoardAction = {
	type: typeof BoardActionTypes.REMOVE_TASK_ID_FROM_BOARD;
	payload: { boardId: string; taskId: string };
};

export type BoardAction =
	| CreateBoardAction
	| ChangeBoardTitleAction
	| RemoveBoardAction
	| AddListIdToBoardAction
	| RemoveListIdFromBoardAction
	| AddTaskIdToBoardAction
	| RemoveTaskIdFromBoardAction;

export const boardReducer = (
	boards: BoardType[] = [],
	action: BoardAction
): BoardType[] => {
	switch (action.type) {
		case BoardActionTypes.CREATE_BOARD: {
			const newBoard = {
				id: Date.now() + "",
				title: action.payload,
				lists: [],
				tasks: [],
			};

			return [...boards, newBoard];
		}

		case BoardActionTypes.CHANGE_BOARD_TITLE: {
			return boards.map((board: BoardType) => {
				if (board.id === action.payload.id) {
					return { ...board, title: action.payload.title };
				}
				return board;
			});
		}

		case BoardActionTypes.REMOVE_BOARD: {
			return boards.filter((board: BoardType) => board.id !== action.payload);
		}

		case BoardActionTypes.ADD_LIST_ID_TO_BOARD: {
			return boards.map((board: BoardType) => {
				if (board.id === action.payload.boardId) {
					return { ...board, lists: [...board.lists, action.payload.listId] };
				}
				return board;
			});
		}

		case BoardActionTypes.REMOVE_LIST_ID_FROM_BOARD: {
			return boards.map((board: BoardType) => {
				if (board.id === action.payload.boardId) {
					return {
						...board,
						lists: board.lists.filter((list) => list !== action.payload.listId),
					};
				}
				return board;
			});
		}

		case BoardActionTypes.ADD_TASK_ID_TO_BOARD: {
			return boards.map((board: BoardType) => {
				if (board.id === action.payload.boardId) {
					return {
						...board,
						tasks: [...board.lists, action.payload.taskId],
					};
				}
				return board;
			});
		}

		case BoardActionTypes.REMOVE_TASK_ID_FROM_BOARD: {
			return boards.map((board: BoardType) => {
				if (board.id === action.payload.boardId) {
					return {
						...board,
						tasks: board.tasks.filter((list) => list !== action.payload.taskId),
					};
				}
				return board;
			});
		}

		default:
			return boards;
	}
};
