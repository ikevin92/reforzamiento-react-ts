interface Person {
  FirstName: string
  lastName?: string
  age: number
  address?: {
    city: string
    country: string
  }
  isAlive?: boolean
}

export const ObjectLiterals = () => {
  const person: Person = {
    FirstName: 'Kevin',
    age: 32,
    address: {
      city: 'Cali',
      country: 'Colombia'
    }
  }

  return (
    <>
      <h3>Objetos literales</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  )
}
