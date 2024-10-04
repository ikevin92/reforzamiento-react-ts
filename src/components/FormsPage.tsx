import { useForm } from 'react-hook-form'

type FormInputs = {
  email: string
  password: string
}

const defaultValues: FormInputs = {
  email: 'usuario@gmail.com',
  password: '123456'
}

export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues
  })

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm)
  }

  console.log(watch('email'))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          <input
            type="text"
            placeholder="password"
            {...register('password')}
          />
          <button type="submit">Ingresar</button>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  )
}
