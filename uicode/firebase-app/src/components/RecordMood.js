"use client"
import AudioRecorder from "@/components/AudioRecorder";
import React, {useState} from 'react'
import Modal from "react-modal";

const RecordMood = () => {
    const [showModal, setShowModal] = useState(false)
    const handleFileChange = (event) => {
        setAudioFile(event.target.files[0]);
      };
    
    //   const handleUpload = async () => {
    //     try {
    //       const formData = new FormData();
    //       formData.append('audio', audioFile);
    
    //       const response = await fetch('/api/upload', {
    //         method: 'POST',
    //         body: formData,
    //       });
    
    //       if (!response.ok) {
    //         throw new Error('Failed to upload audio');
    //       }
    
    //       const data = await response.json();
    //       console.log('Response from server:', data);
    //     } catch (error) {
    //       console.error('Error uploading audio:', error);
    //     }
    //   };
  return (
    <div>
            <button className="bg-white dark:bg-slate-600 dark:text-white text-base font-medium px-4 py-2 rounded-md mt-12 ml-6"
                onClick={() => setShowModal(true)}>
                Record your thoughts
            </button>

            <div className='top-50 justify-center mx-auto'>
                <Modal className="items-center my-auto  mx-auto max-w-2xl h-3/4 rounded-3xl bg-slate-800 py-6 px-4"
                    isOpen={showModal}>
                    
                    <AudioRecorder />

                    

                    <button className="justify-center hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12"
                        onClick={() => setShowModal(false)}>
                        Close
                    </button>

                </Modal>
            </div>


        </div>
  )
}

export default RecordMood