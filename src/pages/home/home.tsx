/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect, useState } from 'react'
import { SliderBottomContainer, Image } from 'pages/home/style'
import { useMediaQuery } from 'beautiful-react-hooks'
import { BACKDROP_RESPONSIVE_SIZE, BACKDROP_SIZE } from 'utils'
import Slider, { Navbar } from 'components'
import { MovieService } from 'services'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from 'store'
import { useTypedSelector } from 'store/store'
import { useMovie } from 'hooks'

export const Home = (): ReactElement => {
  const dispatch = useDispatch()
  const { sliderMovies } = useMovie()

  useEffect(() => {
    if (sliderMovies.length === 0) {
      dispatch(getPopularMovies())
    }
  }, [])

  return (
    <>
      <Slider>
        {sliderMovies.map((item, index) => (
          <Slider.Slide key={`${item.id}-${index}`} value={index}>
            <Slider.Caption>
              <Slider.Title text={item.original_title} />
              <Slider.Text text={item.overview} />
            </Slider.Caption>
            <Slider.Image src={item.backdrop_path} />
          </Slider.Slide>
        ))}
      </Slider>
    </>
  )
}
