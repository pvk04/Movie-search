import React from "react";

export default function Pagination({ filmsPerPage, totalFilms, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul
			style={{
				display: "flex",
				listStyle: "none",
				marginLeft: "auto",
				marginRight: "auto",
				marginTop: "auto",
			}}
		>
			{pageNumbers.map((num) => (
				<li key={num}>
					<button
						onClick={() => {
							paginate(num);
						}}
						style={{
							background: "none",
							border: "1px solid grey",
							width: "40px",
							height: "40px",
						}}
					>
						{num}
					</button>
				</li>
			))}
		</ul>
	);
}
