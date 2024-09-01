/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import FavoritesController from '#controllers/favorites_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.on('/favorites').render('pages/home')
router.resource('user.favorites', FavoritesController)
router.resource('users', UsersController)