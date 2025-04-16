import { useReducer } from "react";
import { boardReducer } from "../../reducers/boardReducer";
import { BoardContext } from "./useBoardContext";

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
	const [boards, dispatchBoardsActions] = useReducer(boardReducer, []);
	return (
		<BoardContext.Provider value={{ boards, dispatchBoardsActions }}>
			{children}
		</BoardContext.Provider>
	);
};
