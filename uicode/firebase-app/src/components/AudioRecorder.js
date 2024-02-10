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
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const options = { mimeType: 'audio/ogg' };
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
    if (recorder) {
      recorder.stop();
      setRecorder(null);
    }
  };

  return (
    <div>
      <button onClick={startRecording} id="startBtn">Start Recording</button>
      <button onClick={stopRecording} id="stopBtn">Stop Recording</button>
      <audio ref={audioRef} controls id="player"></audio>
    </div>
  );
};

export default AudioRecorder;