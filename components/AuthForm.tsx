import React, { ReactNode } from 'react'

const AuthForm = ({ children }: { children: ReactNode }) => {
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthForm