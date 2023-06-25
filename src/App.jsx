import { Component } from 'react'

// import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      names: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { names: users }
        })
      )
  }

  // Class component builds this function when initializes & it optimizes the code
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { names, searchField } = this.state
    const { onSearchChange } = this

    const filteredNames = names.filter((person) => {
      return person.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search person'
          onChange={onSearchChange}
        />
        {filteredNames.map((person) => (
          <h1 key={person.id}>{person.name}</h1>
        ))}
      </div>
    )
  }
}

export default App
