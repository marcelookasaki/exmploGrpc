const client = require('./client')
let newNote = {
  title: "New Note",
  content: "New Note content"
}
client.insert(newNote, (error, note) => {
  if (!error) {
    console.log('Nova nota criada com sucesso', note)
  } else {
    console.error(error)
  }
})