import React from 'react'
import PropTypes from 'prop-types'
import useStyles from "./useStyles"

const Video = ({src, poster = null, muted = true, autoplay = false, loop = true, controls = true, ...props}) => {
  const classes = useStyles()
  const autoplayProps = autoplay ? {autoPlay: true, playsinline: true} : {autoPlay: false}
  return (
      <>
        <video
            {...autoplayProps}
            controls={controls}
            loop={loop}
            muted={muted}
            src={src}
            poster={poster}
            className={classes.root + ' Video'}
        ><track kind="captions" {...props} /></video>
      </>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
}

export default Video