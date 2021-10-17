/**
 * @swagger
 * definitions:
 *   getUserById:
 *     application/x-www-form-urlencoded:
 *     type: object
 *     required:
 *        - user
 *     properties:
 *          user:
 *            type: string
 *            format: uuid
 *   loginBody:
 *     type: object
 *     required:
 *        - email
 *        - password
 *     properties:
 *          email:
 *            type: string
 *          password:
 *            type: string
 *   addUserBody:
 *     application/x-www-form-urlencoded:
 *     type: object
 *     required:
 *        - name
 *        - email
 *        - gender
 *        - password
 *     properties:
 *          name:
 *            type: string
 *          password:
 *            type: string
 *          email:
 *            type: string
 *          gender:
 *            type: string
 *   updateUserBody:
 *     application/x-www-form-urlencoded:
 *     type: object
 *     required:
 *        - email
 *        - name 
 *        - gender 
 *     properties:
 *          email:
 *            type: string
 *          name:
 *            type: string
 *          gender:
 *            type: string
 */

/**
 * @swagger
 * /fetchUser/{userId}:
 *   get:
 *     description: get user details by userId
 *     tags:
 *      - Users
 *     parameters: [
 *       {
 *          name: 'x-access-token',
 *          in: 'header',
 *          schema: {
 *           type: 'string'
 *          },
 *          required: true
 *        },
 *        {
 *          name: 'userId',
 *          in: 'path',
 *          schema: {
 *           type: 'string'
 *          },
 *          required: true
 *        }
 *     ]
 *     responses:
 *       200:
 *         description: get user details by Id
 */

/**
 * @swagger
 * /login:
 *   post:
 *     description: login 
 *     tags:
 *      - Users
 *     requestBody:
 *       description: Form data Details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/loginBody'
 *     responses:
 *       200:
 *         description: login.
 */

/**
 * @swagger
 * /delete/{userId}:
 *   delete:
 *     description: delete user by userId
 *     tags:
 *      - Users
 *     parameters: [
 *        {
 *          name: 'x-access-token',
 *          in: 'header',
 *          schema: {
 *           type: 'string'
 *          },
 *          required: true
 *        },
 *        {
 *          name: 'userId',
 *          in: 'path',
 *          schema: {
 *           type: 'string'
 *          },
 *          required: true
 *        }
 *     ]
 *     responses:
 *       200:
 *         description: delete user by userId.
 */

/**
 * @swagger
 * /updateById/{userId}:
 *   put:
 *     description: update user by userId
 *     tags:
 *      - Users
 *     parameters: [
 *        {
 *          name: 'x-access-token',
 *          in: 'header',
 *          schema: {
 *           type: 'string'
 *          },
 *          required: true
 *        },
 *        {
 *          name: 'userId',
 *          in: 'path',
 *          schema: {
 *           type: 'string'
 *          },
 *          required: true
 *        }
 *     ]
 *     requestBody:
 *       description: Form data Details
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/definitions/updateUserBody'
 *     responses:
 *       200:
 *         description: update user by userId.
 */

/**
 * @swagger
 * /fetchUsers:
 *   get:
 *     description: fetch all user details
 *     tags:
 *      - Users
 *     parameters: [
 *        {
 *          name: 'x-access-token',
 *          in: 'header',
 *          schema: {
 *           type: 'string'
 *          },
 *          required: true
 *        }
 *     ]
 *     responses:
 *       200:
 *         description: fetch all user details.
 */

/**
 * @swagger
 * /addUser:
 *   post:
 *     description: add user into db
 *     tags:
 *      - Users
 *     requestBody:
 *       description: Form data Details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/addUserBody'
 *     responses:
 *       201:
 *         description: add user into db.
 */

