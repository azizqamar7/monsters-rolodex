import { Component } from 'react'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

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
        <SearchBox
          className='search-box'
          placeholder='search person'
          onChangeHandler={onSearchChange}
        />
        <CardList person={filteredNames} />
      </div>
    )
  }
}

export default App
