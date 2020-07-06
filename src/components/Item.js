import React from "react";

const Item = ({ data }) => (
	<div className="grid-item">
		<img className="preview-image" src={data.thumbnail} alt={data.title}/>
		<div className="preview-title">{data.title}</div>
	</div>
)
export default Item;