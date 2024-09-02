import Favorite from '#models/favorite';
import type { HttpContext } from '@adonisjs/core/http'
import axios from 'axios'
export default class FavoritesController {
  /**
   * Display a list of resource
   */
  async index({ }: HttpContext) {
    try {
      const userId = 1;
      // Busca os favoritos do usuário no banco de dados
      const favorites = await Favorite.query().where('id_user', userId);
      // Helper function to fetch Star Wars character data
      const fetchStarWarsData = async (favorite: { idStarWars: any; id: any; }) => {
        try {
          const response = await axios.get(`https://swapi.dev/api/people/${favorite.idStarWars}`);
          return {
            id: favorite.id,
            name: response.data.name,
            height: response.data.height,
            mass: response.data.mass
          };
        } catch (error) {
          console.error(`Failed to fetch data for ID: ${favorite.idStarWars}`, error);
          return {
            id: favorite.id,
            name: 'Dados não encontrados',
          };
        }
      };

      // Fetch data concurrently
      const favoritesAPI = await Promise.all(favorites.map(fetchStarWarsData));

      return favoritesAPI;
    } catch (error) {
      return [{ erro: error.message }];
    }
  }



  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { id_star_wars } = request.only(['id_star_wars'])

    try {
      const isFavorite = await Favorite.query()
        .where('id_user', 1)
        .andWhere('id_star_wars', id_star_wars)
        .first()

      if (isFavorite) {
        return 202
      }
      await Favorite.create({ idUser: 1, idStarWars: id_star_wars })
      return 201
    } catch (error) {
      return error
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    try {
      const favorite = await Favorite.findOrFail(params.id);
      await favorite.delete();
      return { message: 'Favorite deleted successfully.' };
    } catch (error) {
      return { error: error.message };
    }
  }
}