const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const bookingsRouter = require('./bookings.js')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/bookings', bookingsRouter);


//TEST ROUTES 
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});


//-----------------------------------------------------------------//

// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// // TEST JWT TOKEN SET IN COOKIES     
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// // TEST RESTORE USER 
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
//     );
    
//     //TEST REQUIRE AUTH MIDDLEWARE 
//     const { requireAuth } = require('../../utils/auth.js');
//     router.get(
//         '/require-auth',
//         requireAuth,
//         (req, res) => {
//             return res.json(req.user);
//         }
//         );
        
        // //-----------------------------------------------------------------//
        
        
        
        
        module.exports = router;