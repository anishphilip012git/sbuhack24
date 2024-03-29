"use client";


import React, { useState, useRef } from 'react';
import Modal from "react-modal";

// import { useEffect } from 'react';

const AudioRecorder = () => {
  const [recorder, setRecorder] = useState(null);
  const audioRef = useRef(null);
  const [showModal, setShowModal] = useState(false)
  const workerOptions = {
    OggOpusEncoderWasmPath: '/opus-media-recorder/OggOpusEncoder.wasm',
    WebMOpusEncoderWasmPath: '/opus-media-recorder/WebMOpusEncoder.wasm'
  };
  

  const startRecording = async () => {
    console.log("start")
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const options = { mimeType: 'audio/webm' };
      const newRecorder = new MediaRecorder(stream, options, workerOptions);
      newRecorder.addEventListener('dataavailable', (e) => {
        if (audioRef.current) {
          audioRef.current.src = URL.createObjectURL(e.data);
        }
      });
      newRecorder.start();
      setRecorder(newRecorder);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
    console.log("stop")
    if (recorder) {
      recorder.stop();
      console.log(audioRef.audio);
      setRecorder(null);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const audioFile = audioRef.current.src;
    const blob = await fetch(audioFile).then((res) => res.blob());

    // const formData = new FormData();
    // formData.x('audio', blob, 'audio.webm');
    // const audioFile = document.querySelector('input[type="file"]').files[0];

    const headers = new Headers();
    headers.append('Content-Type', 'audio/wav');

    try {
      // const response = await fetch('https://us-central1-sbuhack24.cloudfunctions.net/apicall/', {
      const response = await fetch('https://us-central1-sbuhack24.cloudfunctions.net/function-1', {
        method: 'POST',
        headers: headers,
        body: blob, // Directly send the File object as the body
        // mode: 'no-cors'
      });
      if (!response.ok) {
        throw new Error('Failed to upload audio');
      }

      const data = await response.json();
      console.log('Response from server:', data);
      
      sessionStorage.setItem("recommendation",JSON.stringify(data))
      setShowModal(false)
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  return (
    <div>
      <button className="bg-white dark:bg-slate-600 dark:text-white text-base font-medium px-4 py-2 rounded-md mt-12 ml-6"
        onClick={() => setShowModal(true)}>
        Record your thoughts
      </button>

      <div className='top-50 justify-center mx-auto'>

        <Modal className="items-center my-auto   mx-auto max-w-2xl h-3/4 rounded-3xl bg-slate-800 pt-20 px-4 "
          isOpen={showModal}>
          
          <h5 className="justify-center px-auto flex mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Please tell us how you are feeling today. Is there something that is bothering you?
        </h5>
        
          <div className='flex justify-center p-4'>
            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={startRecording} id="startBtn">Start Recording</button>
            <button className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={stopRecording} id="stopBtn">Stop Recording</button>
          </div>

          <div className='flex flex-col'>
            <audio className='w-full' ref={audioRef} controls id="player"></audio><br></br>

            <button className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit} type="submit">
              Upload Audio
            </button>

          </div>

          <div className='flex justify-center'>
            <button className="justify-center mx-auto hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12"
              onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>




        </Modal>
      </div>


    </div>

  );
};

export default AudioRecorder;