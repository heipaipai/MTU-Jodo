
import dbConnect from '../../lib/mongoose'
import Users from '../../models/users'

export default async function handler(req: any, res: any) {
  await dbConnect()
  const { method } = req

  if (method === 'POST'){
    try {
      const user = await Users.create(req.body)
      res.status(201).json({ success: true, data: user })
    }
    catch (error) {
      res.status(400).json({ success: false })
    } 
}
}