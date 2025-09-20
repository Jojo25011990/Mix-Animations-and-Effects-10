import { NavLink } from "react-router";

const Header = () => {
	return (
		<header className="w-full flex items-center justify-center text-white pt-10 px-5">
			<nav>
				<ul>
					<li>
						<NavLink to={"/"}>
							Owl
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</NavLink>
					</li>
					<li>
						<NavLink to={"/SectionButton"}>
							Button
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</NavLink>
					</li>
					<li>
						<NavLink to={"/SectionPriceTable"}>
							PriceTable
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
