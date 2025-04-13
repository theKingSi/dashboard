import React from 'react'
import { Topbar } from './Topbar'
import { Grid } from './Grid'

export default function Dashboard  ()  {
  return (
    <div className='bg-white rounded-lg pb-4 shadow h-[100vh]'>
       <Topbar />
       <Grid />
    </div>
  )
}
