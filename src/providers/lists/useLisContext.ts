import { createContext, useContext } from "react";
import { ListAction, ListType } from "../../reducers/listReducer";

type ListsContextType = {
	lists: ListType[];
	dispatchListsActions: React.Dispatch<ListAction>;
};

export const ListsContext = createContext<ListsContextType | undefined>(
	undefined
);

export const useListsContext = () => {
	const context = useContext(ListsContext);
	if (!context) {
		throw new Error("useListsContext must be used within a ListsProvider");
	}
	return context;
};
