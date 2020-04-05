

import React from "react"
import PropTypes from "prop-types"
import './fade_in_paragraph.css'

class FadeInParagraph extends React.Component {

    constructor(props) {
        super()
    }


    render() {
        return (
            <div className = "fade_in_paragraph__panel">
                {this.props.text}
            </div>
        )
    }
}




FadeInParagraph.propTypes = {
    text: PropTypes.string.isRequired,
}
  
export default FadeInParagraph