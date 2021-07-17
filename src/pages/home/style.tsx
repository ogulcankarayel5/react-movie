import { StyledText } from 'components/slider/style'
import styled from 'styled-components'
import { breakPoints } from 'utils'

export const SliderBottomContainer = styled.div`
  display: flex;

  align-items: center;

  & p:nth-child(2) {
    margin-left: 2rem;
  }
`

export const SliderBottomTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (min-width: ${breakPoints.sm}) {
    display: none;
  }
  ${StyledText} {
    color: #596068;
  }
`

export const Image = styled.img``
