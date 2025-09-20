import type { ReactNode } from "react";

type PricePlanProps = {
	icon: ReactNode;
	title: string;
	description01: string;
	description02: string;
	value: string;
	btnText: string;
	className?: string;
};

const PriceTablePlan = ({
	icon,
	title,
	description01,
	description02,
	value,
	btnText,
	className = "",
}: PricePlanProps) => {
	return (
		<div
			className={`flex flex-col items-center justify-center text-center text-white uppercase p-2.5 ${className}`}
		>
			<div className="text-5xl mb-2">{icon}</div>
			<h2 className="text-4xl font-bold mb-5">{title}</h2>
			<p className="w-[90%] text-sm border-t border-white py-5">
				{description01}
			</p>
			<p className="w-[90%] text-sm border-b border-t border-white py-5">
				{description02}
			</p>
			<p className="w-[90%] text-3xl font-bold border-b  border-white py-5">
				{value}
			</p>
			<button
				className={`text-xl uppercase font-bold font-[Arial] text-white px-7 py-3 mt-5 border rounded transition-all duration-300 hover:text-green-700 cursor-pointer`}
			>
				{btnText}
			</button>
		</div>
	);
};

export default PriceTablePlan;
