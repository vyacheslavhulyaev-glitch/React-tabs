import React from "react";

export function JobTabs({ jobs, currentItem, setCurrentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const isActive = index === currentItem;

        return (
          <button
            key={job.id}
            type="button"
            className={`job-btn ${isActive ? "active-btn" : ""}`}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}