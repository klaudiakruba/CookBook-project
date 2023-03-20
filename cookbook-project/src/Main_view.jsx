import React from "react";
import cookbook from "./assets/cookbook.jpg";

const FirstPageMain = () => {
	return (
		<section className="first-page__main">
			<img src={cookbook} className="main_img" alt="CookBook"></img>
			<p className="first-page__text">
				Witaj
				<br />w C<strong className="special_text">o</strong>okBook
			</p>
		</section>
	);
};

export default FirstPageMain;
