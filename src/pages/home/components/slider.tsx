import Slider from 'components'
import { useMovie } from 'hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularMovies, getTopRatedMovies } from 'store'
import {
  SliderBottomContainer,
  SliderBottomTextContainer,
} from 'pages/home/style'
import { getYear } from 'utils'

export const HomeSlider = () => {
  const dispatch = useDispatch()
  const { sliderMovies } = useMovie()

  useEffect(() => {
    if (sliderMovies.length === 0) {
      dispatch(getPopularMovies())
    }
    dispatch(getTopRatedMovies())
  }, [])

  return (
    <Slider>
      {sliderMovies?.map((item: any, index: any) => (
        <Slider.Slide key={`${item.id}-${index}`} value={index}>
          <Slider.Caption>
            <Slider.Title text={item.original_title} />
            <Slider.Text text={item.overview} />
            <SliderBottomContainer>
              <Slider.Text text='IMDB' />
              <Slider.Text
                size='large'
                bold
                text={item.vote_average.toString()}
              />
            </SliderBottomContainer>
          </Slider.Caption>
          <Slider.Image src={item.backdrop_path} />
          <SliderBottomTextContainer>
            <Slider.Text
              size='small'
              text={getYear(item.release_date.toString())}
            />
          </SliderBottomTextContainer>
        </Slider.Slide>
      ))}
    </Slider>
  )
}
