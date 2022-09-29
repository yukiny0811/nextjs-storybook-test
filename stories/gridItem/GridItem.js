import React from 'react'
import PropTypes from 'prop-types'
import st from './GridItem.module.css'
import { Overlay } from '../overlay/Overlay'
import Image from "next/image"

export const GridItem = ({...props}) => {
  return (
    <div
    {...props}
    >
      <Image 
      priority 
      src="/images/image.png"
      className={["image"].join(" ")}
      layout="fill"
      objectFit="cover"
      alt="" 
      />
      <Overlay label={props.label} desc={props.desc}/>
    </div>
  )
}

GridItem.propTypes = {}

GridItem.defaultProps = {}
