import React from 'react'
import PropTypes from 'prop-types'
import st from './EventDescriptionLabel.module.css'

export const EventDescriptionLabel = ({ text }) => {
  return (
    <div
    className={[st.eventDescriptionLabelContainer].join(" ")}
    >
        <p
        className={[st.eventDescriptionLabel].join(" ")}
        >
            {text}
        </p>
    </div>
  )
}

EventDescriptionLabel.propTypes = {
    text: PropTypes.string.isRequired
}

EventDescriptionLabel.defaultProps = {
    text: "default"
}
