import React from "react";  
export function JobTabs({
  jobs,
  currentItem,
  setCurrentItem
}) {
  return <div className='btn-container'>
          {jobs.map((job, index) => {
            return <button 
            className={`job-btn ${index === currentItem ? 'active-btn' : ''}`} 
            key={job.id} 
            onClick={() => setCurrentItem(index)}
            >{job.company}</button>;
    })}
        </div>;
}
  