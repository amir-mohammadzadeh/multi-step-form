import { ReactNode } from 'react'
//import './ButtonsGroup.css'

interface Prop{
  children: ReactNode
}

export const ButtonsGroup = ({children}:Prop) => {

  return (
    <div className="button-content">
      {children}
    </div>
  )
}
