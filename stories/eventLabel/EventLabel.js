import React from 'react'
import PropTypes from 'prop-types'
import st from './EventLabel.module.css'

export const EventLabel = ({ text, ...props }) => {
  return (
    <div
    className={[st.eventLabelContainer].join(" ")}
    >
        <p
        {...props}
        className={[st.eventLabel].join(" ")}
        >
            {text}
        </p>
    </div>
  )
}

EventLabel.propTypes = {
    text: PropTypes.string.isRequired
}

EventLabel.defaultProps = {
    text: "default"
}
