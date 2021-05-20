import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        minHeight: `80vh`,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
