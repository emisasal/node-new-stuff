import express from "express"

const app = express()

const { PORT, NODE_ENV } = process.env

type Items = {
  id: number
}

let items: Items[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

// Create
app.post("/items", (req, res) => {
  const item = req.body
  items.push(item)
  res.status(201).send(item)
})

// Read all
app.get("/items", (req, res) => {
  res.send(items)
})

// Read one
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id))
  if (!item) return res.status(404).send("Item not found")
  res.send(item)
})

// Update
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id))
  if (!item) return res.status(404).send("Item not found")

  Object.assign(item, req.body)
  res.send(item)
})

// Delete
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id))
  if (itemIndex === -1) return res.status(404).send("Item not found")

  const deletedItem = items.splice(itemIndex, 1)
  res.send(deletedItem)
})

app.listen(PORT, () => {
  console.log(`Environment: ${NODE_ENV}`)
  console.log(`Server is running on http://localhost:${PORT}`)
})
