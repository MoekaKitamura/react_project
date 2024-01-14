import { produce } from "immer"

const state = {
  name: "Tom",
  hobbies: ["tennis", "soccer"]
}

// console.log("aaa")

const newState = produce(state, draft => {
  draft.name = "john"
  console.log(draft)
})

console.log(state, newState)
