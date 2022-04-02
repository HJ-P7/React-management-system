import React, { Component } from 'react'
import {Card, Carousel} from 'antd'
import './index.scss'

export class Index extends Component {
  render() {
    return (
      <div className='carousel'>
        <Card title="文字轮播" className='card-wrap'>
          <Carousel autoplay effect='fade'>
            <div>
              <h3>周一去大理</h3>
            </div>
            <div>
              <h3>周二去西藏</h3>
            </div>
            <div>
              <h3>周三去浙江</h3>
            </div>
            <div>
              <h3>周四去西安</h3>
            </div>
          </Carousel>
        </Card>

        <Card title="图片轮播" className='card-wrap'>
          <Carousel autoplay effect='fade'>
            <div>
              <img src='/assets/carousel-img/carousel-1.jpg' />
            </div>
            <div>
              <img src='/assets/carousel-img/carousel-2.jpg' />
            </div>
            <div>
              <img src='/assets/carousel-img/carousel-3.jpg' />
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}

export default Index