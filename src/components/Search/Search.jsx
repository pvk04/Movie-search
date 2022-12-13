import React from "react";
import FilmsPage from "../FilmsPage/FilmsPage";
import Pagination from "../Pagination/Pagination";

export default function Search() {
	const [name, setName] = React.useState("");
	const [searchBool, setSearchBool] = React.useState(false);
	const [films, setFilms] = React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [filmsPerPage] = React.useState(8);

	const lastFilmIndex = currentPage * filmsPerPage;
	const firstFilmIndex = lastFilmIndex - filmsPerPage;
	const currentFilms = films.slice(firstFilmIndex, lastFilmIndex);

	function paginate(number) {
		setCurrentPage(number);
	}

	React.useEffect(() => {
		async function fetchFilms() {
			fetch(
				`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${name}`,
				{
					method: "GET",
					headers: {
						"X-API-KEY": "d6c39860-3995-40c7-bfa9-8383bf7a8b37",
						"Content-Type": "application/json",
					},
				}
			)
				.then((res) => res.json())
				.then((json) => setFilms(json.films))
				.catch((err) => console.log(err));
		}
		fetchFilms();
	}, [searchBool]);

	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
			<div style={{ display: "flex", margin: "auto", marginTop: "10px" }}>
				<input
					type="text"
					placeholder="Введите название фильма"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					style={{ width: "400px", height: "40px" }}
				/>
				<button
					onClick={() => {
						setSearchBool(!searchBool);
					}}
					// style={{ width: "50px", height: "20px" }}
				>
					Поиск
				</button>
			</div>

			<FilmsPage films={currentFilms} />
			<Pagination
				filmsPerPage={filmsPerPage}
				totalFilms={films.length}
				paginate={paginate}
			/>
		</div>
	);
}
