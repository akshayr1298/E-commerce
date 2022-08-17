import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import { Col, Row } from 'antd';

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
     <Row>
       <Col span={12}>
      <Image
        preview={{
          visible: false,
        }}  
         
         src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44c62a34522169.5a575c5ea2903.jpg"
        onClick={() => setVisible(true)}
      />
      </Col>
      </Row>
      <div
        style={{
          display: 'none',
        }}
      >git 
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >           
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44c62a34522169.5a575c5ea2903.jpg" />
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/93d88834522169.5a575c5ea3701.jpg" />
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2b9c834522169.5a575c5ea2f45.jpg" />
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default Gallery;