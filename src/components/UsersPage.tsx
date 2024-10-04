import { useUsers } from '../hooks'
import { UserRow } from './UserRow'

// fetch('https://reqres.in/api/users?page=2')
//   .then((response) => response.json())
//   .then((data) => console.log(data))

export const UsersPage = () => {
  const { users, nextPage, previousPage, currentPageRef } = useUsers()

  return (
    <>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
            />
          ))}
        </tbody>
      </table>
      <div>
        <button
          disabled={currentPageRef.current === 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  )
}
