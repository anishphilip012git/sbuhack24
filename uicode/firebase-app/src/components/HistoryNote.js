import React, {useState} from 'react'

export const HistoryNote = ({ affirmations,resLength }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (e) => {
    // Update the currentIndex, cycling back to 0 if we reach the end of the array
    setCurrentIndex(currentIndex=>(currentIndex + 1) % resLength);
    
  };
  return (


    <div 
    onClick={handleClick}
    className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {affirmations[currentIndex]}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

    </div>

  )
}
