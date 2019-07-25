import React, { Component } from 'react';
import userImg from './asset/userImg.jpg';

class PoetProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poet: {
        name: 'Ivanov Ivan Ivanovich',
        img: userImg,
        bio: [
          {
            data: '1999',
            title: 'born',
            description: 'some text some text some text'
          },
          {
            data: '1999',
            title: 'born',
            description: 'some text some text some text'
          },
          {
            data: '1999',
            title: 'born',
            description: 'some text some text some text'
          }
        ],
        works: [
          {
            titleRu: 'some poem',
            titleEn: 'some poem',
            titleBy: 'some poem',
            age: 'xxx age'
          },
          {
            titleRu: 'some poem',
            titleEn: 'some poem',
            titleBy: 'some poem',
            age: 'xxx age'
          }
        ],
        galerey: [
          {
            photo: 'src/'
          },
          {
            photo: 'src/'
          },
          {
            photo: 'src/'
          }
        ],
        video: [
          {
            video: 'link you-tube'
          },
          {
            video: 'link you-tube'
          },
          {
            video: 'link you-tube'
          }
        ],
        map: {
          x: 'dd',
          y: 'ff',
        }
      },
      mainHeaders: {
        bio: 'Биография',
        biblio: 'Список произведений',
        gallery: 'Галерея',
        video: 'Видео',
        map: 'Карта'
      },
    };
  }


  render() {
    const { poet, mainHeaders } = this.state;

    return (
      <div className="cart__poet">
        <div className="container__photo">
          <img src={poet.img} alt="" />
        </div>
        <div className="poen__name"><p>{poet.name}</p></div>
        <div className="works">
          <h2>{mainHeaders.biblio}</h2>
          <div className="table">
            <div className="left-colum"><p>{poet.works[0].titleBy}</p></div>
            <div className="right-colum"><p>{poet.works[0].age}</p></div>
          </div>        
        </div>
      </div>
    );
  }
}

export default PoetProfile;
