import { Loader } from './Loader';
import { JobTabs } from './JobTabs';
import { useState, useEffect } from 'react'

import JobInfo from './JobInfo';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const newJobs = await resp.json();
      setJobs(newJobs);
      setIsLoading(false);

    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  } 

  useEffect(() => {
    fetchJobs();
  }, []);

  if(isLoading) {
    return (
      <main>
        <Loader />
      </main>
    )
  }

  return (
    <main>
      <article className='jobs-center'>
        <JobTabs 
          jobs={jobs} 
          currentItem={currentItem} 
          setCurrentItem={setCurrentItem}  
        />

        <JobInfo 
          jobs={jobs} 
          currentItem={currentItem} 
        />
        
      </article>
    </main>
    
  );
};
export default App;
