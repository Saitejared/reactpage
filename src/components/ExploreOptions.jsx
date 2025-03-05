import React from "react";
import "../App.css";

const ExploreOptions = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore options near me</h2>

      <div className="explore-options">
        <details className="option">
          <summary>Popular cuisines near me</summary>
        </details>
        <details className="option">
          <summary>Popular restaurant types near me</summary>
        </details>
        <details className="option">
          <summary>Top restaurant chains</summary>
        </details>
        <details className="option">
          <summary>Cities we deliver to</summary>
        </details>
      </div>

      <div className="explore-footer">
        <button className="btn">
          <span className="flag">🇮🇳</span> India
        </button>
        <button className="btn">
          <span className="globe">🌐</span> English
        </button>
      </div>
    </div>
  );
};

export default ExploreOptions;
