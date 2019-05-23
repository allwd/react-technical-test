import React from 'react'
import { Transition } from 'react-transition-group'

export const FADE_TIMEOUT = 300

const Fade = ({ children, timeout, ...rest }) => {
  const defaultStyle = {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  }

  return (
    <Transition timeout={FADE_TIMEOUT} {...rest}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

Fade.defaultProps = {
  in: false,
  timeout: FADE_TIMEOUT
}

export default Fade
