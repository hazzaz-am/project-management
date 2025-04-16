import { useReducer } from "react";
import { listReducer } from "../../reducers/listReducer";
import { ListsContext } from "./useLisContext";

export const ListProvider = ({ children }: { children: React.ReactNode }) => {
	const [lists, dispatchListsActions] = useReducer(listReducer, []);
	return (
		<ListsContext.Provider value={{ lists, dispatchListsActions }}>
			{children}
		</ListsContext.Provider>
	);
};
