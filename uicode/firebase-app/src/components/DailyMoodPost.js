"use client"
import React, { useState } from 'react';
import Modal from "react-modal";

const DailyMoodPost = () => {

    const openModal = () => {
        // Do something to open the modal.
    };
    const [mood, setMood] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(mood)
        alert(mood)
    }
    return (
        <div>
            <button className="hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12"
                onClick={() => setShowModal(true)}>
                Write it down
            </button>

            <div className='top-50 justify-center mx-auto'>
                <Modal className="items-center my-auto  mx-auto max-w-2xl h-3/4 rounded-3xl bg-slate-800 py-6 px-4"
                    isOpen={showModal}>
                    {/* <form onSubmit={handleSubmit}>
                        <textarea
                            name="message"
                            placeholder="Enter message"
                            onChange={e => setMood(e.target.value)}
                            value={mood}
                            required
                            className='justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                        <button type="submit" className="hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12">Send</button>
                    </form> */}
                    <div className="bg-white rounded-3xl shadow relative dark:bg-gray-700 justify-center w-3/4 mx-auto my-auto">

                        <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSubmit}>
                            
                            <div className='mt-20 p-10 '>
                                <label  className="text-xl font-medium text-gray-900 block mb-10 dark:text-gray-300">How are you feeling today?</label>
                                <textarea type="textbox" value = {mood} onChange={e=>setMood(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required="" />
                            </div>
                            <button className="justify-center hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12"
                        type='submit'>
                        Submit
                    </button>

                        </form>
                    </div>

                    <button className="justify-center hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12"
                        onClick={() => setShowModal(false)}>
                        Close
                    </button>

                </Modal>
            </div>


        </div>
    );
}

export default DailyMoodPost