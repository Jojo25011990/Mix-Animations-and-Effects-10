import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import SectionOwl from "./pages/SectionOwl";
import SectionButton from "./pages/SectionButton";
import SectionPriceTable from "./pages/SectionPriceTable";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<SectionOwl />} />
					<Route path="/SectionButton" element={<SectionButton />} />
					<Route
						path="/SectionPriceTable"
						element={<SectionPriceTable />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
