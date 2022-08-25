import React from 'react';
import 'antd/dist/antd.min.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: '70vh',
  width:"100%",
  color: '#fff',
  textAlign: 'center',
  objectFit:"cover"

};

const Slider = () => (
  <Carousel autoplay>
    <div >
      <img src="https://louisphilippe.imgix.net/img/app/categorymedia/production/8/8268-6-10564.jpg" style={contentStyle} alt="" />
    </div>
    <div>
    <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={contentStyle} alt="" />
     
    </div>
    <div>
      <img src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={contentStyle} alt="" />

     
    </div>
    <div>
      <img src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " style={contentStyle} alt="" />
      
    </div>
  </Carousel>
);

export default Slider;