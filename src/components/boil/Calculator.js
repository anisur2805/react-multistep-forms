import React, { Component } from "react";
import BoilVerdict from "./BoilVerdict";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from "./lib/converter";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
    //   scale: scale,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
