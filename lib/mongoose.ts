
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://AndrewAshe:andrewashe123@clusterjodo.gv3txwb.mongodb.net/?retryWrites=true&w=majority')

let cached: any = { conn: null, promise: null }

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: true,
      useCreateIndex: true
    }

    cached.promise = mongoose.connect('mongodb+srv://AndrewAshe:andrewashe123@clusterjodo.gv3txwb.mongodb.net/?retryWrites=true&w=majority', opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect