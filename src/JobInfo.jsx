import { FaAngleDoubleRight } from "react-icons/fa";

const JobInfo = ({ jobs, currentItem }) => {
  const job = jobs[currentItem];

  if (!job) return null;

  const { title, company, duties, dates, id } = job;

  return (
    <div className="job-info" key={id}>
      <h4>{title}</h4>

      <div className="job-company">{company}</div>

      <div className="job-date">{dates}</div>

      {duties.map((duty, index) => (
        <div className="job-desc" key={index}>
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      ))}
    </div>
  );
};

export default JobInfo;