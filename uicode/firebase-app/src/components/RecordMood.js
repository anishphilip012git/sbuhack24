"use client"
import React, {useState} from 'react'
import Modal from "react-modal";

const RecordMood = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div>
            <button className="bg-white dark:bg-slate-600 dark:text-white text-base font-medium px-4 py-2 rounded-md mt-12 ml-6"
                onClick={() => setShowModal(true)}>
                Record your thoughts
            </button>

            <div className='top-50 justify-center mx-auto'>
                <Modal className="items-center my-auto  mx-auto max-w-2xl h-3/4 rounded-3xl bg-slate-800 py-6 px-4"
                    isOpen={showModal}>
                    
                    

                    

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