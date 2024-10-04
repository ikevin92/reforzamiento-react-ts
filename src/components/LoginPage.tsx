import { useEffect } from 'react'
import { useAuthStore } from '../store'

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status)
  const user = useAuthStore((state) => state.user)
  const login = useAuthStore((state) => state.login)
  const logout = useAuthStore((state) => state.logout)

  useEffect(() => {
    setTimeout(() => {
      logout()
    }, 1500)
  }, [])

  if (authStatus === 'checking') {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <h3>Login Page</h3>
      {authStatus === 'authenticated' ? (
        <>
          <p>Autenticado como: {JSON.stringify(user, null, 2)} </p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Usuario no autenticado</p>
          <button onClick={() => login('usuario@gmail.com', '123456')}>
            Login
          </button>
        </>
      )}
      <br />
    </>
  )
}
