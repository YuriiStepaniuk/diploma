const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: '*', // This is also the default, can be omitted
});

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4', 
      messages: [{ role: 'user', content: message }],
    });

    const responseMessage = response.data.choices[0].message.content;

    res.json({ response: responseMessage });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).json({ error: 'Failed to get response from OpenAI API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
