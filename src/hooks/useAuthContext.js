import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export function useAuthContext() {
    const context = useContext(AuthContext)
    if(!context) throw Error("Using authContext outside provider") 
  return context
}

