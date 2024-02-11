### Project Name: MoodTune

### Readme for MoodTune

#### Introduction
MoodTune is a comprehensive, full-stack application designed to enhance your daily emotional well-being through personalized media recommendations. By harnessing the power of your own voice and feelings, MoodTune converts your audio journals and text entries into actionable insights, offering you tailored YouTube videos, affirmations, exercise suggestions, and music recommendations. Leveraging Google Cloud Platform's Speech-to-Text, Natural Language Processing, and YouTube v3 APIs, MoodTune is your go-to companion for navigating the complexities of your emotions and promoting a balanced, positive lifestyle.

#### Features
- *Audio Journal Processing*: Record your thoughts and feelings through an intuitive audio interface. Our system seamlessly converts your voice into text using GCP's Speech-to-Text API.
- *Sentiment Analysis*: Utilizing GCP's Natural Language Processing API, MoodTune analyzes the sentiment of your journal entries, identifying your emotional state with precision.
- *Personalized Recommendations*:
  - *YouTube Videos*: Based on your sentiment analysis, receive curated YouTube video suggestions to inspire, comfort, or motivate you.
  - *Affirmations*: Start or end your day with powerful affirmations tailored to boost your mood and self-confidence.
  - *Exercise Suggestions*: Get personalized exercise recommendations that align with your emotional needs, promoting physical health as a foundation for mental well-being.
  - *Music Recommendations*: Discover music playlists designed to resonate with your current emotions, whether you need uplifting tunes or calming melodies.

#### Getting Started
1. *Prerequisites*: Ensure you have Node.js and npm installed. You'll also need a Google Cloud Platform account with the Speech-to-Text, Natural Language API, and YouTube v3 API enabled.
2. *Installation*:
   - Clone the repository: git clone https://github.com/YourRepo/MoodTune.git
   - Navigate to the project directory: cd MoodTune
   - Install dependencies: npm install
3. *Configuration*:
   - Set up your GCP credentials and export the path to your credential file: export GOOGLE_APPLICATION_CREDENTIALS="path/to/your/credentials.json"
   - Configure your .env file with the necessary API keys and project IDs.
4. *Running the Application*:
   - Start the server: npm start
   - Open your browser and navigate to http://localhost:3000 to access the MoodTune interface.

#### Usage
- *Daily Entries*: Use the application daily to record your audio journal or write text entries about your feelings and experiences.
- *Review Recommendations*: Explore the recommendations provided by MoodTune based on your sentiment analysis. You can access YouTube videos, affirmations, exercises, and music directly through the app.
- *Track Your Mood*: Over time, MoodTune helps you understand patterns in your emotional well-being, offering insights to improve your mood and overall health.

#### Contributing
We welcome contributions to MoodTune! If you have suggestions for improvements or new features, please feel free to fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

#### License
Distributed under the MIT License. See LICENSE for more information.

#### Acknowledgments
- Google Cloud Platform for providing the APIs that power MoodTune's core functionalities.
- The open-source community for continuously inspiring and pushing the boundaries of what's possible.

Join us in making MoodTune a cornerstone for personal growth and emotional well-being. Together, we can navigate the ups and downs of life with grace, understanding, and positivity.


## Project Pitch :
Introducing MoodTune(GratefulMe/MindfulMe): a groundbreaking full-stack application that revolutionizes the way you navigate your emotions. Utilizing the robust frameworks of Next.js and React, combined with the back-end prowess of Node.js and Python, MoodTune offers a seamless, intuitive platform for emotional journaling and personal growth. With Google Cloud Platform's APIs at its core, including Speech-to-Text and Natural Language Processing, your audio and text journals become the basis for transformative insights.

MoodTune's newest feature now enables you to journal directly on our website, providing a comprehensive, secure space for expressing your thoughts and feelings. This, alongside our original functionalities, offers personalized YouTube video suggestions, affirmations, exercise recommendations, and music playlists, all tailored to your emotional state.

Powered by Firebase for dynamic data management and styled with Tailwind CSS for an engaging user experience, MoodTune stands as a beacon of support and inspiration. Whether through voice, text, or direct journaling on our platform, MoodTune listens, understands, and guides you towards a more positive and balanced emotional well-being. Join us on this journey to discover, heal, and grow with MoodTune, your personal companion in the quest for emotional wellness.
