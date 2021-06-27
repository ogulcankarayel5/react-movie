import styled from 'styled-components'
import { TextProps } from 'components/text/text'

export const StyledText = styled.p<Pick<TextProps, 'bold' | 'size'>>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'font-size: 1rem'
      case 'medium':
        return 'font-size: 2rem'
      case 'large':
        return 'font-size: 4rem'
      case 'xl':
        return 'font-size: 6rem'
    }
  }}
`
