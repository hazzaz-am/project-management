import { MagnifyingGlassIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { toast } from "sonner";
import { useBoardContext } from "../../../providers/boards/useBoardContext";
import { BoardActionTypes } from "../../../reducers/boardReducer";

export const BoardsHeader = () => {
	const [title, setTitle] = useState("");
	const { dispatchBoardsActions } = useBoardContext();

	const handleCreateBoard = () => {
		if (title.trim() === "") {
			toast.error("Please enter a board name.");
			return;
		}

		toast.success(`Board "${title}" created!`);
		dispatchBoardsActions({
			type: BoardActionTypes.CREATE_BOARD,
			payload: title,
		});
		setTitle("");
	};

	return (
		<div className="container p-4 flex flex-col sm:flex-row gap-4 items-center justify-between mx-auto my-12">
			<TextField.Root
				placeholder="Search boards..."
				size="3"
				className="2xl:w-1/4"
			>
				<TextField.Slot>
					<MagnifyingGlassIcon height="16" width="16" />
				</TextField.Slot>
			</TextField.Root>

			<Dialog.Root>
				<Dialog.Trigger>
					<Button size="3">
						<PlusCircledIcon />
						Create Board
					</Button>
				</Dialog.Trigger>

				<Dialog.Content maxWidth="450px">
					<Dialog.Title>New Board</Dialog.Title>
					<Dialog.Description size="2" mb="4">
						Create a new board to manage your tasks and projects.
					</Dialog.Description>

					<Flex direction="column" gap="3">
						<label>
							<TextField.Root
								placeholder="Enter Board Name"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</label>
					</Flex>

					<Flex gap="3" mt="4" justify="end">
						<Dialog.Close>
							<Button variant="solid" color="red">
								Cancel
							</Button>
						</Dialog.Close>
						<Button onClick={handleCreateBoard}>Create</Button>
					</Flex>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	);
};
