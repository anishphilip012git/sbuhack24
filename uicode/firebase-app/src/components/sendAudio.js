// pages/api/upload-audio.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const formData = new FormData();
        formData.append('audio', req.body);
  
        // Make HTTP POST request to the server
        const response = await fetch('http://example.com/upload-audio', {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error('Failed to upload audio');
        }
  
        const data = await response.json(); // Assuming server responds with JSON
        res.status(200).json({ success: true, data });
      } catch (error) {
        console.error('Error uploading audio:', error);
        res.status(500).json({ success: false, error: 'Error uploading audio' });
      }
    } else {
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
  }
  