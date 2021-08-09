import styled from 'styled-components'
import { breakPoints } from 'utils'
import { Text } from 'components/text'

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

export const FilmTitle = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 15px;
  margin-left: 125px;
`
