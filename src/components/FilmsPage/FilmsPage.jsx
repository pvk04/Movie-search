import React from "react";

export default function FilmsPage({ films }) {
	return (
		<div>
			<ul
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					listStyleType: "none",
					width: "100%",
				}}
			>
				{films.map((film, index) => (
					<li
						key={index}
						style={{
							margin: "10px",
							height: "400px",
							width: "20%",
							border: "1px black solid",
							borderRadius: "3px",
						}}
					>
						<div
							style={{
								padding: "5px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<h3
								style={{
									maxWidth: "280px",
									alignItems: "center",
									textAlign: "center",
									wordBreak: "break-word",
								}}
							>
								{film.nameRu}
							</h3>
							<img
								src={film.posterUrl}
								alt=""
								style={{
									width: "200px",
									alignItems: "center",
								}}
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
