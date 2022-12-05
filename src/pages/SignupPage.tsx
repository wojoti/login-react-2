import { useEffect, useRef } from 'react'
import { RefHandler } from '../components/organisms/SignupForm/SignupForm'
import SignupTemplate from '../components/templates/SignupTemplate/SignupTemplate'

const SignupPage = () => {
  const signupRef = useRef<RefHandler>(null)

  useEffect(() => {
    signupRef?.current?.emailRef?.current?.focus()
  })
  const onSignupSubmit = () => {
    console.log({
      email: signupRef?.current?.emailRef?.current?.value,
      password: signupRef?.current?.passwordRef?.current?.value,
    })
  }
  return <SignupTemplate ref={signupRef} onSignupSubmit={onSignupSubmit} />
}

export default SignupPage
