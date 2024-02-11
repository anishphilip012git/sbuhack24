import React, { useState } from 'react'

const EmbedYT = ({ resLength, videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = () => {
        setCurrentIndex(currentIndex => (currentIndex + 1) % resLength)
    }
    return (
        <div onClick={handleClick}

            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a >
                <iframe src={videos[currentIndex].replace("watch?v=", "embed/")} width="100%" height="100%" allowFullScreen></iframe>
            </a>

        </div>
    )
}

export default EmbedYT