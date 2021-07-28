import { StyledText } from 'components/slider/style'
import styled from 'styled-components'
import { breakPoints } from 'utils'
import { Text } from 'components'
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

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  gap: 30px;
  padding-bottom: 30px;
`

export const FilmContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilmsContainer = styled.div`
  & ${FilmContainer}:first-of-type {
    margin-top: 80px;
  }

  & ${FilmContainer}:not(:first-of-type) {
    margin-top: 40px;
  }
`

export const FilmTitle = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 15px;
  margin-left: 125px;
`
