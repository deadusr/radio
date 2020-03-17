const { Router } = require('express');
const router = new Router();

const getRadio = require('../core/get-radio');
const getMusic = require('../core/get-music');

router.get('/radio', async (req, res) => {
  const data = await getRadio();
  res.status(200);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.json(data)
})

router.get('/music/:id', async (req, res) => {
  const regExp = /\w+$/;
  const id = regExp.exec(req.path).toString();
  const data = await getMusic(id);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.status(200);
  res.json(data)
})

module.exports = router;