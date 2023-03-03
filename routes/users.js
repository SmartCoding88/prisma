var express = require('express');
var router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/* GET users listing. */

router.get('/', async function(req, ress, next){});

router.get('/:id', async function(req, ress, next){});

router.post('/', async function(req, res, next) {
  
});


router.put('/:id', async function(req, res, next) {
  
});

router.delete('/:id', async function(req, ress, next){});

module.exports = router;
