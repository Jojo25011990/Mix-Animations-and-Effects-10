import { FaUser, FaUserFriends, FaBuilding } from "react-icons/fa";
import PriceTablePlan from "./PriceTablePlan";

const PriceTable = () => {
	return (
		<div className="w-full max-w-[1000px] min-h-[476px] flex p-8 bg-neutral-950 rounded-lg price-table">
			<PriceTablePlan
				icon={<FaUser />}
				title="Personal"
				description01="Lorem, ipsum dolor."
				description02="Lorem, ipsum dolor. Sit amet consectur."
				value="Free"
				btnText="sign up"
			/>
			<PriceTablePlan
				icon={<FaUserFriends />}
				title="Small Team"
				description01="Lorem, ipsum dolor."
				description02="Lorem, ipsum dolor. Sit amet consectur."
				value="$300"
				btnText="free trial"
				className="free-trial-main price-table-card"
			/>
			<PriceTablePlan
				icon={<FaBuilding />}
				title="Personal"
				description01="Lorem, ipsum dolor."
				description02="Lorem, ipsum dolor. Sit amet consectur."
				value="$500"
				btnText="free trial"
			/>
		</div>
	);
};

export default PriceTable;
