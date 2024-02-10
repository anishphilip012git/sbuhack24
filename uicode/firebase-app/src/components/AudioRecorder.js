"use client";


import { useState, useRef } from 'react';

const AudioRecorder = () => {
  const [recorder, setRecorder] = useState(null);
  const audioRef = useRef(null);

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

  return (
    <div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={startRecording} id="startBtn">Start Recording</button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={stopRecording} id="stopBtn">Stop Recording</button>
      <audio ref={audioRef} controls id="player"></audio>
    </div>
  );
};

export default AudioRecorder;