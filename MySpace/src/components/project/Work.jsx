import React from "react";

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import "./WorkCard.css";

const Work = () => {
	return (
		<div className="work-container">
			<h1 className="project-heading">Project</h1>
			<div className="project-container">
				{WorkCardData.map((val, index) => {
					return (
						<WorkCard
							key={index}
							imgsrc={val.imgsrc}
							title={val.title}
							text={val.text}
							view={val.view}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Work;