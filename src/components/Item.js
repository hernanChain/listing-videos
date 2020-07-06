import React from "react";

const Item = ({ data }) => (
	<div>
		<img src={data.thumbnail} alt={data.title}/>
		<div>{data.title}</div>
	</div>
)
export default Item;