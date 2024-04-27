import "dotenv/config"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { HfInference } from "@huggingface/inference"

// Express
const app = express()
const port = 3032
// Use CORS
app.use(cors())

// Set image parser using body-parser
const imageParser = bodyParser.raw({type: ["image/jpeg", "image/png"], limit: "10mb"})

// Portrait route
app.post("/portrait", imageParser, async (req, res) => {
  // Get client IP
  const clientIPArray = req.ip.split(":")
  const clientIP = clientIPArray[clientIPArray.length-1]
  console.log("req.body:", req.body)
  // Upload
  // try {
  //   console.log(req.files)
  //   // New file name
  //   const fileName = `upload_${clientIP}_${Date.now().toString()}.${fileExt}`
  //   fs.writeFile("image.jpeg", req.body, (error) => {
  //     if (error) {
  //       throw error
  //     }
  //   })

  //   res.sendStatus(200)
  // } catch (error) {
  //   res.sendStatus(500)
  // }
  // Set model
  const model = "stabilityai/stable-diffusion-xl-refiner-1.0" // Most downloaded
  // Get Hugging Face token
  const HF_TOKEN = process.env.HF_TOKEN || ""
  const inference = new HfInference(HF_TOKEN)

  // await inference.imageToImage({
  //   data: await (await fetch("image")).blob(),
  //   model: model,
  //   parameters: {
  //     prompt: "Deblur this image"
  //   }
  // })

  res.send("Portrait")
})

app.listen(port, () => {
  console.log(`Animal portrait server listening on port ${port}`)
})