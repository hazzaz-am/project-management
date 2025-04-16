import { useBoardContext } from "../../../providers/boards/useBoardContext";
import { SingleBoard } from "./SingleBoard";

export const AllBoards = () => {
	const { boards } = useBoardContext();

	return (
		<div className="container mx-auto p-4 font-gothic">
			<h1 className="text-2xl font-bold mb-4">All Boards</h1>
			{boards.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
					{boards.map((board) => (
						<SingleBoard key={board.id} board={board} />
					))}
				</div>
			) : (
				<p>No boards available</p>
			)}
		</div>
	);
};
