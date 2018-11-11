import React, { Component } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

class Locale extends Component {
  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          name="locale"
          value={this.props.locale}
          onChange={this.handleChange}
        >
          <FormControlLabel value="en" control={<Radio />} label="en" />
          <FormControlLabel value="rus" control={<Radio />} label="rus" />
        </RadioGroup>
      </FormControl>
    )
  }

  handleChange = (ev) => {
    console.log(ev.target.value, 'ev.target.value')
    this.props.onChange(ev.target.value)
  }
}

export default Locale
