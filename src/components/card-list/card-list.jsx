import { Component } from 'react'
import Card from './card/card'
import './card-list.css'

class CardList extends Component {
  render() {
    const { person } = this.props
    return (
      <div className='card-list'>
        {person.map((person) => {
          return <Card key={person.id} person={person} />
        })}
      </div>
    )
  }
}

export default CardList
