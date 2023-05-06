import React from 'react'
import Rain from './Rain'
import Fertilizer from './Fertilizer'
import Sun from './Sun'
import Lightning from './Lightning'
import { Weather } from './PlantPage'

export default function Environment(props: {environmentState: Weather}) {
    return(
        <>
        {props.environmentState===Weather.Rainy && <Rain/> }
        {props.environmentState===Weather.Fertilizing && <Fertilizer/> }
        {props.environmentState===Weather.Sunny && <Sun/> }
        {props.environmentState===Weather.Lightning && <Lightning/> }
        </>
    )
}