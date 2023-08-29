import React, { useState, useEffect } from "react";

import WorkflowCard from "./WorkFlowCard";
import WorkflowCardData from "./WorkFlowCardData";
import "./WorkflowCard.css";

import { FaPlus, FaTimes } from "react-icons/fa";

const Workflow = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<div className="work-container">
			{/* <h1 className="project-heading">Project</h1> */}
			<div className="project-container">
				{WorkflowCardData.map((val, index) => {
					return (
						<WorkflowCard
							key={index}
							title={val.title}
							text={val.text}
						/>
					);
				})}
				<div className="add-project-btn" onClick={handleClick}>
					{click ? (
						<WorkflowCard title="TEST" text="TEST" />
					) : (
						<FaPlus size={25} style={{ color: "#fff" }} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Workflow;
