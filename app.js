import "dotenv/config"
import express from "express"
import cors from "cors"
import { HfInference } from "@huggingface/inference"

// Express
const app = express()
const port = 3032
// Use CORS
app.use(cors())

app.get("/portrait", async (req, res) => {
  res.send("Portrait")
})

app.listen(port, () => {
  console.log(`Animal portrait server listening on port ${port}`)
})