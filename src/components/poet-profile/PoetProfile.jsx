import React, { Component } from 'react';
import userImg from './asset/userImg.jpg';

class PoetProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poet: {
        name: 'Ivanov Ivan Ivanovich',
        img: userImg,
        age: 'xx xx xxxx year'
      }
    };
  }


  render() {
    const { poet } = this.state;

    return (
      <>
        <div className="cart__poet">
          <div className="poen__name"><p>{poet.name}</p></div>
          <img src={poet.img} alt="" className="photo__poet" />
        </div>
      </>
    );
  }
}

export default PoetProfile;
