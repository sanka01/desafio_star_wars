import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Favorite extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare idUser: number
  @column()
  declare idStarWars: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

}