import styled from 'styled-components'
import { Text } from 'components'

export const DetailContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 2fr;
  margin-top: 150px;
  padding: 0 100px;
  grid-gap: 30px;
  grid-template-areas: 'leftSide rightSide';
`

export const LeftSide = styled.div`
  grid-area: 'leftSide';
`

export const RightSide = styled.div`
  grid-area: 'rightSide';
`

export const DetailTitle = styled(Text)`
  color: #4a5359;
  position: absolute;
  margin-top: -50px;
`

export const DetailText = styled(Text)`
  color: #4a5359;
`

export const DetailSubText = styled(DetailText)`
  color: #2a3139;
`

export const InfoContainer = styled.div`
  margin-top: 50px;
`

export const InfoItemContainer = styled.div<{ extraMargin: boolean }>`
  display: flex;
  margin-top: ${(props) => (props.extraMargin ? '40px' : '10px')};
  & p:first-of-type {
    flex: 1;
  }
  & p:last-of-type {
    flex: 2;
  }
`
