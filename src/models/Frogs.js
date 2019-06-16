import { locationDiff } from '../context/Grid'
/*
    location: [x, y]
    coordinates: 'x, y'
 */
export class Frog {
  constructor(father = null, mother = null, character = null, gender = null, location = null) {
    this.father = father
    this.mother = mother
    this.character = character || []
    if (!character) {
      if (Math.random() >= 0.5) {
        this.character = [father.character[0], mother.character[1]]
      } else {
        this.character = [father.character[1], mother.character[0]]
      }
    }
    this.gender = gender || (Math.round(Math.random()) ? 'male' : 'female')
    this.location = location
  }

  getGender() {
    return this.gender
  }

  getLocation() {
    return this.location
  }

  move(location) {
    const diff = locationDiff(this.location, location)
    const maxDiff = this.gender ? 3 : 2

    if (diff > maxDiff) {
      alert(`You can't jump that far :)`)
      return false
    }

    this.location = location
    return true
  }

  spawn(coordinates) {
    this.location = coordinates

    return this
  }

  reproduce(partner) {
    if (this.gender === partner.gender || locationDiff(this.location, partner.location) !== 1) {
      alert(`You cant reproduce the same gender, maybe they are too far though, double check :)`)
      return false
    }

    const father = this.gender === 'male' ? this : partner
    const mother = this.gender === 'male' ? partner : this

    return new Frog(father, mother)
  }
}
