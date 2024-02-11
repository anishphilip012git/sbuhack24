import React, { useState } from 'react'
import Modal from "react-modal";

const Journal = () => {
    const [ans1, setans1] = useState("");
    const [ans2, setans2] = useState("");
    const [ans3, setans3] = useState("");
    const [showModal, setShowModal] = useState(false);
    const journalQuestions = [
        "How did you sleep?",
        "What are your goals for the day?",
        "Did you exercise today?"
    ]

    const handleSubmit = (e) => {
        e.preventDefault()

        alert(mood)
    }
    return (
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Daily Journal
            </h5>
            <button className="hover:scale-110  dark:text-slate-700 bg-black  dark:bg-white  text-base font-medium px-4 py-2 rounded-md mt-12"
                onClick={() => setShowModal(true)}>
                Write it down
            </button>

            <div className='top-50 justify-center mx-auto'>
                <Modal className="items-center my-auto  mx-auto max-w-2xl h-3/4 rounded-3xl bg-slate-800 py-6 px-4"
                    isOpen={showModal}>

                    <div className="bg-white rounded-3xl shadow relative dark:bg-gray-700 dark:border-gray-700 justify-center w-3/4 mx-auto my-auto">

                        <form className="pt-10 mx-auto" onSubmit={handleSubmit}>

                            <div className='mt-2 px-20 '>
                                <label className="text-xl font-medium text-gray-900 block mb-2 dark:text-gray-300">How did you sleep?</label>
                                <textarea type="textbox" value={ans1} onChange={e => setans1(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " required="" />
                            </div>
                            <div className='mt-2 px-20 '>
                                <label className="text-xl font-medium text-gray-900 block mb-2 dark:text-gray-300">What are your goals for the day?</label>
                                <textarea type="textbox" value={ans2} onChange={e => setans2(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                            </div>
                            <div className='mt-2 px-20 '>
                                <label className="text-xl font-medium text-gray-900 block mb-2 dark:text-gray-300">Did you exercise today?</label>
                                <textarea type="textbox" value={ans3} onChange={e => setans3(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                            </div>


                            <button className="justify-center hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12"
                                type='submit'>
                                Submit
                            </button>

                        </form>
                    </div>

                    <button className="justify-center hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-6"
                        onClick={() => setShowModal(false)}>
                        Close
                    </button>

                </Modal>
            </div>


        </div>
    )
    {/* <form onSubmit={handleSubmit}>
//     <textarea
//         name="message"
//         placeholder="Enter message"
//         onChange={e => setMood(e.target.value)}
//         value={mood}
//         required
//         className='justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//     />
//     <button type="submit" className="hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12">Send</button>
// </form> */}
}

export default Journal