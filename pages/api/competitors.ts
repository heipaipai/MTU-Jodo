
import dbConnect from '../../lib/mongoose'
import Competitors from '../../models/competitors'

export default async function handler(req: any, res: any) {
  await dbConnect()

  const { method } = req

  if (method === 'GET') {
    try {
      const competitors = await Competitors.find({}) /* find all the data in our database */
      res.status(200).json({ success: true, data: competitors })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }
  else { // POST
    try {
      const competitor = await Competitors.create(req.body)
      res.status(201).json({ success: true, data: competitor })
    }
    catch (error) {
      res.status(400).json({ success: false })
    } 
  }
}