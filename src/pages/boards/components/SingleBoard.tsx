import { CrossCircledIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useBoardContext } from "../../../providers/boards/useBoardContext";
import { BoardActionTypes } from "../../../reducers/boardReducer";

type SingleBoardType = {
	id: string;
	title: string;
	lists: string[];
	tasks: string[];
};

export const SingleBoard = ({ board }: { board: SingleBoardType }) => {
	const { dispatchBoardsActions } = useBoardContext();

	const handleDeleteBoard = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		dispatchBoardsActions({
			type: BoardActionTypes.REMOVE_BOARD,
			payload: board.id,
		});
	};
	return (
		<div
			// to={`/boards/${board.id}`}
			className="border p-4 rounded-md shadow-md"
		>
			<div className="flex items-center justify-between mb-2">
				<h2 className="text-lg font-semibold">{board.title}</h2>
				<AlertDialog.Root>
					<AlertDialog.Trigger>
						<Button color="red">
							<CrossCircledIcon width={20} height={20} />
						</Button>
					</AlertDialog.Trigger>
					<AlertDialog.Content maxWidth="450px">
						<AlertDialog.Title>Delete Board</AlertDialog.Title>
						<AlertDialog.Description size="2">
							Are you sure? This action cannot be undone.
						</AlertDialog.Description>

						<Flex gap="3" mt="4" justify="end">
							<AlertDialog.Cancel>
								<Button variant="soft" color="gray">
									Cancel
								</Button>
							</AlertDialog.Cancel>
							<AlertDialog.Action>
								<Button variant="solid" color="red" onClick={handleDeleteBoard}>
									Delete
								</Button>
							</AlertDialog.Action>
						</Flex>
					</AlertDialog.Content>
				</AlertDialog.Root>
			</div>
			<p>{board.lists.length} Lists</p>
			<p>{board.tasks.length} Tasks</p>
		</div>
	);
};
