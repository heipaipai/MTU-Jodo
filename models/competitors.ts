import mongoose from 'mongoose'

const CompetitorSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  beltGrade: String,
  country: String,
})

export default mongoose.models.Competitor || mongoose.model('Competitor', CompetitorSchema)