import styled, { css } from 'styled-components'
import { Text } from 'components/text'
import { breakPoints } from 'utils'
export const StyledCard = styled.div`
  height: 230px;
  width: 150px;
  background-color: inherit;
  position: relative;
`

export const StyledImage = styled.img`
  height: 190px;
  width: 100%;
  min-width: 75px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: ${breakPoints.sm}) {
    width: 75px;
    height: 120px;
  }
`

export const StyledText = styled(Text)<{ lineClamp?: boolean }>`
  color: #4a5359;
  font-size: 1rem;
  ${(props) =>
    props.lineClamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`

export const StyledSubText = styled(StyledText)`
  margin-top: 5px;
  font-size: 0.7rem;
  color: #2a3139;
`

export const StyledFooter = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`
