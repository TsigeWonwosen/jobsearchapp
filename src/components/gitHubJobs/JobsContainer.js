import React from "react";
import Info from "./Info";
import Jobs from "./Jobs";

function JobsContainer() {
  return (
    <div className="flex-1">
      <Info />
      <Jobs />
    </div>
  );
}

export default JobsContainer;
