import React from 'react'
import character from '../data/characterData.json'

function Character(character) {
  return (
    <div data-test="component-character">
        <h1 data-test="char-name">{character.name}</h1>
        <img data-test="char-img">{character.imgUrl}</img>
        <ul data-test="char-list">
            <li data-test="char-birth">Date of Birth: {character.birth}</li>
            <li data-test="char-death">Date of Death: {character.death}</li>
            <li data-test="char-race">Race: {character.race}</li>
            <li data-test="char-realm">Realm: {character.realm}</li>
            <li data-test="char-spouse">Spouse: {character.spouse}</li>
        </ul>
    </div>
  )
}

export default Character