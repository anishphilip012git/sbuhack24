"use client"
import DailyMoodPost from "@/components/DailyMoodPost";
import Footer from "@/components/Footer";
import { HistoryNote } from "@/components/HistoryNote";
import AudioRecorder from "@/components/AudioRecorder";

import React, { useState } from "react";



export default function Home() {
  
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (e) => {
    // Update the currentIndex, cycling back to 0 if we reach the end of the array
    setCurrentIndex(currentIndex=>(currentIndex + 1) % response.affirmations.length);
    console.log(`Current Index is ${currentIndex}`);
  };
  const response = [{

    "datetime": {
      "_seconds": 1707595295,
      "_nanoseconds": 340000000
  },
  "sentimentmagnitude": 0.8,
  "journaltext": [
      "I am trying to do okay",
      "I will be better"
  ],
  "sentimentscore": 0.3,
  "affirmations": [
      "Want to explore something new today?",
      "Here are some interesting reads and activities you might enjoy:",
      "TED Talks for a variety of intriguing topics: https://www.ted.com/talks",
      "Meetup for finding local workshops or activities: https://www.meetup.com"
  ],
  "username": "Manthan Singh",
  "userEmail": "mantsingh@cs.stonybrook.edu",
  "youtubelink": [
      "https://www.youtube.com/watch?v=tDb01ggyDfo",
      "\"https://www.youtube.com/watch?v=CpNBODqTA34",
      "https://www.youtube.com/watch?v=WYetg3AuLE4",
      "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
      "https://www.youtube.com/watch?v=ee8CdS-Swnw"
  ]

  },
  {

    "datetime": {
      "_seconds": 1707595295,
      "_nanoseconds": 340000000
  },
  "sentimentmagnitude": 0.8,
  "journaltext": [
      "I am trying to do okay",
      "I will be better"
  ],
  "sentimentscore": 0.3,
  "affirmations": [
      "Want to explore something new today?",
      "Here are some interesting reads and activities you might enjoy:",
      "TED Talks for a variety of intriguing topics: https://www.ted.com/talks",
      "Meetup for finding local workshops or activities: https://www.meetup.com"
  ],
  "username": "Manthan Singh",
  "userEmail": "mantsingh@cs.stonybrook.edu",
  "youtubelink": [
      "https://www.youtube.com/watch?v=tDb01ggyDfo",
      "\"https://www.youtube.com/watch?v=CpNBODqTA34",
      "https://www.youtube.com/watch?v=WYetg3AuLE4",
      "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
      "https://www.youtube.com/watch?v=ee8CdS-Swnw"
  ]

  }
]
console.log(response);


  return (
    <div>

      <div className=" font-custom pt-24 h-screen bg-white text-center dark:bg-slate-100">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl dark:text-slate-700 text-center">
          Stay grateful in <br />
          your future endeavors
        </h1>
        <p className="text-slate-700 dark:text-slate-900  text-base sm:text-sm md:text-xl text-center mt-4">
          <span className="text-center hidden sm:inline">
            What are you grateful for at the moment ? Send a message to the <br />
            future, so you can watch ,
          </span>
          when you feel tired and overwhelmed and
          <br /> be grateful to God for how far you've come.
        </p>
        <div className=" text-center flex justify-center">
          <DailyMoodPost />

          <AudioRecorder />
        </div>
        <div className="mt-24">

        </div>
      </div>


      <div className="h-screen flex overflow-auto items-center justify-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 space-x-12 items-center justify-center">

          <HistoryNote
            onClick={handleClick}
            affirmations = {response[0].affirmations[0]}
            />



        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>

  );
}
