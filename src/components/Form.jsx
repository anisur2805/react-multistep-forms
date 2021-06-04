import React, { Component } from "react";
class Form extends Component {
  state = {
    title: "",
    somethingElse: "",
    text: "",
    libraries: "",
    isGoing: true,
    numberOfGuests: 2,
    isAgree: false,
  };
  changeHandler = (e) => {
    // ###Style One
    // if (e.target.type === 'text') {
    // 	this.setState({
    // 		title: e.target.value
    // 	})
    // } else if (e.target.type === 'textarea') {
    // 	this.setState({
    // 		text: e.target.value
    // 	})
    // } else if (e.target.type === 'select-one') {
    // 	this.setState({
    // 		libraries: e.target.value
    // 	})
    // } else if (e.target.type === 'checkbox') {
    // 	this.setState({
    // 		isAgree: e.target.checked
    // 	})
    // }

    // ###Style Two --- Seems Most Easy to handle
    // console.log(e.target.name)
    // this.setState({
    // 	[ e.target.name ]: e.target.value
    // })

    // ###Style Three
    // console.log(e.target.name)
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const {
      title,
      somethingElse,
      text,
      libraries,
      isAgree,
      isGoing,
      numberOfGuests,
    } = this.state;
    console.log(title, text, libraries, isGoing, numberOfGuests, isAgree);
    e.target.reset();

    this.setState({
      title: "",
      somethingElse: "",
      text: "",
      libraries: "",
      isGoing: true,
      numberOfGuests: 2,
      isAgree: false,
    });
  };
  render() {
    const {
      title,
      somethingElse,
      text,
      libraries,
      isGoing,
      numberOfGuests,
      isAgree,
    } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={this.changeHandler}
          name="title"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Something Else"
          value={somethingElse}
          onChange={this.changeHandler}
          name="somethingElse"
        />
        <br />
        <br />
        <textarea
          value={text}
          onChange={this.changeHandler}
          value={text}
          placeholder="Enter Text Here"
          name="text"></textarea>
        <br />
        <br />
        <select
          value={libraries}
          onChange={this.changeHandler}
          name="libraries">
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          name="isGoing"
          onChange={this.changeHandler}
          checked={isGoing}
        />
        Yes, Going
        <br />
        <br />
        <input
          type="number"
          name="numberOfGuests"
          onChange={this.changeHandler}
          value={numberOfGuests}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={this.changeHandler}
          checked={isAgree}
          name="isAgree"
        />{" "}
        I agree
        <br />
        <br />
        <input type="submit" value="Submit" disabled={!isAgree} />
      </form>
    );
  }
}
export default Form;
