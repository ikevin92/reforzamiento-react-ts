export const BasicTypes = () => {
  const name: string = 'Kevin'
  const age: number = 32
  const isActive: boolean = true

  const powers: string[] = ['React', 'Vue', 'Angular']

  return (
    <>
      <h3>Tipos Básicos</h3>
      {name} {age} {isActive ? 'Activo' : 'Inactivo'}
      <br />
      {powers.join(', ')}
    </>
  )
}
