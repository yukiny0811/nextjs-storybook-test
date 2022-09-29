import React from 'react'
import PropTypes from 'prop-types'
import st from './Overlay.module.css'
import { EventLabel } from '../eventLabel/EventLabel'
import { EventDescriptionLabel } from '../eventDescriptionLabel/EventDescriptionLabel'

export const Overlay = ({label, desc}) => {
  return (
    <div
    className={[st.overlay].join(" ")}
    >
      <EventLabel 
      text={label} 
      className={st.eventLabel}
      />
      <EventDescriptionLabel 
      text={desc}
      className={st.eventDescriptionLabel}
      />
    </div>
  )
}

Overlay.propTypes = {}

Overlay.defaultProps = {}
