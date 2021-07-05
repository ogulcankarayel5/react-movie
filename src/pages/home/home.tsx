/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect, useState } from 'react'
import { SliderBottomContainer, Image } from 'pages/home/style'
import { useMediaQuery } from 'beautiful-react-hooks'
import { BACKDROP_RESPONSIVE_SIZE, BACKDROP_SIZE } from 'utils'
import Slider, { Navbar } from 'components'

export const Home = (): ReactElement => {
  // const [imageSize, setImageSize] = useState(BACKDROP_SIZE)
  // const isSmall = useMediaQuery('(max-width: 768px)')

  // useEffect(() => {
  //   if (isSmall) {
  //     setImageSize(BACKDROP_RESPONSIVE_SIZE)
  //   } else {
  //     setImageSize(BACKDROP_SIZE)
  //   }
  // }, [isSmall])
  return (
    <>
      <Slider>
        <Slider.Slide value={0}>
          <Slider.Caption>
            <Slider.Title text='THE IRISHMAN' />
            <Slider.Text text='According to Deadline, before accepting the role of Russell Bufalino, Joe Pesci refused multiple times to come out of retirement in order to appear in this film. Some sources say the actual number of refusals was fifty.' />
            <SliderBottomContainer>
              <Slider.Text text='IMDB' />
              <Slider.Text size='large' bold text='7.9' />
            </SliderBottomContainer>
          </Slider.Caption>

          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
        <Slider.Slide value={1}>
          <Slider.Image src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed44f1b0-bb15-4a76-be53-2f3d480084fa/dd340bm-0dcb17cb-3d02-48b7-bacd-57ac808a0b86.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkNDRmMWIwLWJiMTUtNGE3Ni1iZTUzLTJmM2Q0ODAwODRmYVwvZGQzNDBibS0wZGNiMTdjYi0zZDAyLTQ4YjctYmFjZC01N2FjODA4YTBiODYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xs-Y8c8DIkCu69PbSjEsFUhKI8OEAklxO5WUHfJ5VvQ' />
        </Slider.Slide>
        <Slider.Slide value={2}>
          <Slider.Image src='https://images6.alphacoders.com/794/794092.jpg' />
        </Slider.Slide>
        <Slider.Slide value={3}>
          <Slider.Image src='https://wallpapercave.com/wp/3nCc3Sq.jpg' />
        </Slider.Slide>
      </Slider>
    </>
  )
}
