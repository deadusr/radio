const { Router } = require('express');
const router = new Router();

const getRadio = require('../core/get-radio');
const getMusic = require('../core/get-music');

const setHeaders = res => {
  res.status(200);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
}

const giveData = (data, res) => {
  setHeaders(res);
  res.json(data);
}

router.get('/radio/rock', async (req, res) => {
  const data = await getRadio('rock');
  giveData(data, res);
})

router.get('/radio/acoustic', async (req, res) => {
  const data = await getRadio('acoustic');
  giveData(data, res);
})

router.get('/radio/edm', async (req, res) => {
  const data = await getRadio('edm');
  giveData(data, res);
})

router.get('/radio/hip-hop', async (req, res) => {
  const data = await getRadio('hip-hop');
  giveData(data, res);
})

router.get('/radio/classic', async (req, res) => {
  const data = await getRadio('classic');
  giveData(data, res);
})


router.get('/music/:id', async (req, res) => {
  const regExp = /\w+$/;
  const id = regExp.exec(req.path).toString();
  const data = await getMusic(id);
  giveData(data, res);
})

module.exports = router;