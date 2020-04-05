/**
 * Component that displays the text as if it was being typed     
 */


import React from "react"
import PropTypes from "prop-types"
import './text_typing.css'

class TextTyping extends React.Component {
    constructor(props) {
        super()


        this.state = {
            text_to_add: props.text.replace(/ /g, " ~~ ").split(" ").reverse(),
            text_display: "",
            cursor_text: "|"
        };
    }

    cursorBlink() {
        this.setState({cursor_text: !!this.state.cursor_text ? "" : "|" })
    }

    textTyping() {
        let new_word = this.state.text_to_add.pop()

        if (new_word != "~~") {            
            
            new_word.split("").forEach(letter => {
                this.setState({text_display: this.state.text_display + letter})
            })
        } else {
            this.setState({text_display: this.state.text_display + " "})
        }

        if (this.state.text_to_add.length <= 0 ) {
            clearInterval(this.textUpdateAnimation)
        }
    }

    componentDidMount() {
        // Create Cursor Blink animation
        this.cursorBlinkInterval = setInterval(this.cursorBlink.bind(this), 300)

        // Create Text animation 
        this.textUpdateAnimation = setInterval(this.textTyping.bind(this), 200)
    }    

    componentWillUnmount() {
        clearInterval(this.cursorBlinkInterval)
        clearInterval(this.textUpdateAnimation)
    }


    render() {
        return (
            <div className = "text_typing_panel col-12 col-xs-12">
                <span className = "text_typing_panel__text">{this.state.text_display}</span>
                <span className = "text_typing_panel__cursor">{(!!this.state.cursor_text) ? this.state.cursor_text: "  "}</span>
            </div>
        )
    }

}

TextTyping.propTypes = {
    text: PropTypes.string.isRequired,
}
  
export default TextTyping