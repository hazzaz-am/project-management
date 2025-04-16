import { createContext, useContext } from "react";
import { BoardAction, BoardType } from "../../reducers/boardReducer";

type BoardContextType = {
	boards: BoardType[];
	dispatchBoardsActions: React.Dispatch<BoardAction>;
};

export const BoardContext = createContext<BoardContextType | undefined>(
	undefined
);

export const useBoardContext = () => {
	const context = useContext(BoardContext);
	if (!context) {
		throw new Error("useBoardContext must be used within a BoardProvider");
	}
	return context;
};
