import { useState } from "react"
import "./App.css"

function App() {
  const [ image, setImage ] = useState("")
  const [ prompt, setPrompt ] = useState("")
  const [ negativePrompt, setNegativePrompt ] = useState("")
  const [ guidanceScale, setGuidanceScale ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit:", image, prompt, negativePrompt, guidanceScale)
    // Validation
    // API call
  }

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const handlePrompt = (e) => {
    setPrompt(e.target.value)
  }

  const handleNegativePrompt = (e) => {
    setNegativePrompt(e.target.value)
  }

  const handleGuidanceScale = (e) => {
    setGuidanceScale(e.target.value)
  }

  return (
    <div>
      <form encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">File:
            <input id="image" type="file" onChange={handleImage} />
          </label>
        </div>
        <div>
          <label htmlFor="prompt">Prompt:
            <input id="prompt" type="text" value={prompt} onChange={handlePrompt} />
          </label>
        </div>
        <div>
          <label htmlFor="negative-prompt">Negative Prompt:
            <input id="negative-prompt" type="text" value={negativePrompt} onChange={handleNegativePrompt} />
          </label>
        </div>
        <div>
          <label htmlFor="guidance-scale">Guidance Scale::
            <input id="guidance-scale" type="text" value={guidanceScale} onChange={handleGuidanceScale} />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
