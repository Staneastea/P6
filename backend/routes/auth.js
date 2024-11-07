const express = require('express');
const router = express.Router();
const authCtrl = require ('../controller/auth');

router.post('/signup', authCtrl.createAuth);