import styled, { css } from 'styled-components'
import { Text } from 'components/text'
import { breakPoints } from 'utils'

type StyledCardProps = {
  small?: boolean
}
export const StyledCard = styled.div<StyledCardProps>`
  height: ${(props) => (props.small ? 'auto' : '230px')};
  width: ${(props) => (props.small ? '100px' : '150px')};
  background-color: inherit;
  position: relative;
`

export const StyledImage = styled.img<StyledCardProps>`
  height: ${(props) => (props.small ? '140px' : '190px')};
  width: ${(props) => (props.small ? 'auto' : '100%')};
  min-width: 75px;
  object-fit: contain;
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

export const StyledFooter = styled.div<StyledCardProps>`
  ${(props) =>
    !props.small &&
    css`
      margin-left: 10px;
    `}
  margin-top: 10px;
`
