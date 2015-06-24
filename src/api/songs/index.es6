import express from 'express';
import Song from './Song';

let router = express.Router();

router.get('/', Song.index);
router.get('/random', Song.random);
router.get('/play/:song', Song.play);

module.exports = router;
