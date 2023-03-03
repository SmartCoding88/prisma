var express = require('express');
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET users listing. */

router.get('/', async function (req, res, next) {

    const users = await prisma.user.findMany({

        select: {
            email: true,
            name: true,
        },

    });

    return res.send(users);

});

router.get('/:id', async function (req, res, next) {

    const fetchedUser = await prisma.user.findMany({

        where: {
            id: parseInt(req.params.id),
          },
        select: {
            email: true,
            name: true,
        },

    });

    return res.send(fetchedUser);
 });

router.post('/', async function (req, res, next) {
    const user = await prisma.user.create({
        data: req.body
    });
    return res.send(user);
});


router.put('/:id', async function (req, res, next) {
    const updateUser = await prisma.user.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: {
            name: 'Viola the Magnificent',
        },
    });
    res.send(updateUser);
});

router.delete('/:id', async function (req, res, next) { 

    const deleteUsers = await prisma.user.deleteMany({
        where: {
          email: {
            contains: 'prisma.io',
          },
        },
      });

      //to delete all users
      //const deleteUsers = await prisma.user.deleteMany({})

    return res.send(deleteUsers);
});

module.exports = router;
