import { Component } from 'react'

class CardList extends Component {
  render() {
    const { person } = this.props
    return (
      <div>
        {person.map((person) => {
          return <h1 key={person.id}>{person.name}</h1>
        })}
      </div>
    )
  }
}

export default CardList
