import React from "react";

const Content = ({ activeSubHeader }) => {
  if (!activeSubHeader) return <p>Select a sub-header option to view content.</p>;

  return (
    <div>
      <h2>{activeSubHeader} Content</h2>
      <p>Details about {activeSubHeader}.</p>
    </div>
  );
};

export default Content;
