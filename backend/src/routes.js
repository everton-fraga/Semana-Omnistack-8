const express = require('express');
const Devcontroller = require('./controllers/DevController');
const Likecontroller = require('./controllers/LikeController');
const Dislikecontroller = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', Devcontroller.index);
routes.post('/devs', Devcontroller.store);
routes.post('/devs/:devId/likes', Likecontroller.store);
routes.post('/devs/:devId/dislikes', Dislikecontroller.store);

module.exports = routes;