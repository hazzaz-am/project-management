import { Outlet } from "react-router";
import { Toaster } from "sonner";

const App = () => {
	return (
		<main>
			<Toaster position="top-center" visibleToasts={1} />
			<Outlet />
		</main>
	);
};
export default App;
