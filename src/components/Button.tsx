type ButtonProps = {
	text?: string;
};

const Button = ({ text = "Button" }: ButtonProps) => {
	return (
		<button type="button" className="section-02-btn">
			{text}
		</button>
	);
};

export default Button;
