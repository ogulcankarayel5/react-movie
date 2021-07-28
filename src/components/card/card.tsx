import React from 'react'
import {
  StyledCard,
  StyledText,
  StyledImage,
  StyledSubText,
  StyledFooter,
} from 'components/card/style'

const Card = ({ children }: any) => {
  return <StyledCard>{children}</StyledCard>
}

const CardText = ({ text }: { text: string }) => {
  return <StyledText lineClamp text={text} />
}

const CardSubText = ({ text }: { text: string }) => {
  return <StyledSubText text={text} />
}

const CardImage = ({ src }: any) => {
  return <StyledImage src={src} />
}

Card.Text = CardText
Card.Image = CardImage
Card.SubText = CardSubText
Card.Footer = StyledFooter

export default Card
