import express, { Request, Response } from "express"

const router = express.Router()

// Create a new item
router.post("/", (req: Request, res: Response) => {
  // Add your code to create a new item here
})

// Get all items
router.get("/", (req: Request, res: Response) => {
  res.json(items)
})

// Get a single item by ID
router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const item = items.find((item) => item.id === id)
  if (item) {
    res.json(item)
  } else {
    res.status(404).json({ message: "Item not found" })
  }
})

// Update an existing item
router.put("/:id", (req: Request, res: Response) => {
  // Add your code to update an existing item here
})

// Delete an item
router.delete("/:id", (req: Request, res: Response) => {
  // Add your code to delete an item here
})

export default router
// Use fake data to return in the gets
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]
