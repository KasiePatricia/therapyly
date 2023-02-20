import React from 'react'
import AppLayout from '../layout/AppLayout'

export default function AuthComponent() {
  return (
    <AppLayout>
    <div><div className="flex justify-center items-center h-screen  w-3/4 mx-auto my-8 bg-therapistCardzzBackground">
    <h2>UnAuthorized user, please login to gain access</h2>
  </div></div>
  </AppLayout>
  )
}
