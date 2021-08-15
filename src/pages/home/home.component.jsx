import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }
  handleSubmit(event) {
    alert('A thought was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 class="animate__animated animate__bounce animate__delay-5s">Thoughts</h1>

        {/* needs troubleshooting on the css for the input box */}
        <div class="webflow-style-input">
          <input class="" type="text" value={this.state.value} onChange={this.handleChange}></input>
          <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
        </div>

      </form>
    );
  }
}

export default Home;