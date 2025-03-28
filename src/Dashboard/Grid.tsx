import React from 'react'
import { StatCards } from './StatCards'
import { Graph } from './Graph'
import { Radar } from 'recharts'
import { UsageRadar } from './UsageRadar'
import { Transaction } from './Transaction'

export const Grid = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
        <StatCards /> 

        <Graph />
        <UsageRadar />
        <Transaction />
    </div>
  )
}
