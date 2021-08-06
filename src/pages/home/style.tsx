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
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 30px;
  @media (max-width: ${breakPoints.sm}) {
    flex-wrap: nowrap;
  }
`

export const FilmContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;

  overflow-x: auto;
`

export const FilmsContainer = styled.div`
  padding-left: 100px;
  @media (max-width: ${breakPoints.md}) {
    padding-left: 0;
  }
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
