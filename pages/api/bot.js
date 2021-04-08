import axios from 'axios';

export default async (req, res) => {
  try {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const url = process.env.DISCORD_URL;
    const botName = process.env.BOT_NAME;
    const botImageUrl = process.env.BOT_IMAGE_URL;
    const message = req.body.message

    await axios({
      url,
      method: 'POST',
      data: {
        username:botName,
        type: 1,
        avatar_url: botImageUrl,
        content: message
        }
    });

    res.end(
      JSON.stringify({
        status: true
      })
    );
  } catch (err) {
    console.log(err);
    res.end(JSON.stringify({ status: false }));
  }
};