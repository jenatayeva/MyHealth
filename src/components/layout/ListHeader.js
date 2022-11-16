import React, { Fragment } from "react";

const ListHeader = ({ title }) => {
	return (
		<div className='container searchBar'>
			<div className='title'>
				<h2>{title}</h2>
			</div>
			<div className='search-box'>
				<input placeholder='Search' />
				<i className='fa-solid fa-magnifying-glass'></i>
			</div>
		</div>
	);
};

export default ListHeader;
