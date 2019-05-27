import React from 'react'

import {
  SwiperContainer
} from './SwiperStyled'

import { Carousel} from 'antd-mobile';

export default props => (
  <SwiperContainer>
    {
        <Carousel>
          {
            props.map(value => (
              <img key={value.targetId} src={value.imageUrl} />
            ))
          }
        </Carousel>
    }
  </SwiperContainer>
)