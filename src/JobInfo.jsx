import { FaAngleDoubleRight } from 'react-icons/fa';

const JobInfo = ({ jobs, currentItem }) => {

    const {title, company, duties, dates} = jobs[currentItem];

  return (
    <div className='job-info'>
        <h4>{title}</h4>
        <div className='job-company'>{company}</div>
        <div className='job-date'>{dates}</div>

            {duties.map((duty, index) => {
              return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
              )
            })}
            
      </div>
  )
}
export default JobInfo