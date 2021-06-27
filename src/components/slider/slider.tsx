import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  StyledContainer,
  StyledDotsContainer,
  StyledDotContainer,
  StyledSlideContainer,
  StyledContent,
  StyledImage,
  StyledTitle,
  StyledText,
  StyledCaption,
  Hey,
} from 'components/slider/style'
import { useSliderContext, SliderContext } from 'components/slider/context'
import { TextProps } from 'components'

type ChildrenProps = {
  children: React.ReactNode
}
type SliderProps = {
  autoPlayTime?: number
  dots?: boolean
} & ChildrenProps

const Slider = ({
  children,
  autoPlayTime = 5000,
  dots = true,
}: SliderProps): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const nextSlide = () => {
    const newIndex = activeIndex >= length - 1 ? 0 : activeIndex + 1
    setActiveIndex(newIndex)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, autoPlayTime)
    return () => clearTimeout(timer)
  }, [activeIndex])

  const length = useMemo(() => {
    return React.Children.count(children)
  }, [])

  const setSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const value = useMemo(() => ({ activeIndex, setSlide }), [activeIndex])

  return (
    <SliderContext.Provider value={value}>
      <StyledContainer>
        {children}
        {dots && (
          <StyledDotsContainer>
            {[...Array(length)].map((_, index) => {
              return (
                <StyledDotContainer
                  key={index}
                  onClick={() => setSlide(index)}
                  isActive={index === activeIndex}
                />
              )
            })}
          </StyledDotsContainer>
        )}
      </StyledContainer>
    </SliderContext.Provider>
  )
}

type SlideProps = {
  value: number
} & ChildrenProps

const Slide = ({ children, value }: SlideProps) => {
  const { activeIndex } = useSliderContext()

  return (
    <StyledSlideContainer
      style={{ marginLeft: value === 0 ? `-${activeIndex * 100}%` : 0 }}
    >
      {children}
    </StyledSlideContainer>
  )
}

type SliderImageProps = {
  src: string
}
const SliderImage = ({ src }: SliderImageProps) => {
  return (
    <Hey>
      <StyledImage src={src} />
    </Hey>
  )
}

const SliderContent = ({ children }: ChildrenProps) => {
  return <StyledContent>{children}</StyledContent>
}

const SliderTitle = ({ text, ...props }: TextProps) => {
  return <StyledTitle size='xl' text={text} {...props} />
}

const SliderText = ({ text, ...props }: TextProps) => {
  return <StyledText text={text} {...props} />
}

const SliderCaption = ({ children }: any) => {
  return <StyledCaption>{children}</StyledCaption>
}

Slider.Slide = Slide
Slider.Image = SliderImage
Slider.Content = SliderContent
Slider.Title = SliderTitle
Slider.Text = SliderText
Slider.Caption = SliderCaption

export default Slider
