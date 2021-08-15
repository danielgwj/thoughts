import React from 'react';
import { Link } from "react-router-dom"; 

import './home.styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }
  handleSubmit(event) {
    // TODO: persist thought to database
    alert('A thought was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 class="animate__animated animate__bounce animate__delay-2s">Thoughts</h1>

        <p>What are you thinking right now?</p>

        <div class="thought-input">
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
        </div>

        <div>
            <Link to="/randomthought" className="others">What are others thinking</Link>
         </div>

      </form>
    );
  }
}

export default Home;