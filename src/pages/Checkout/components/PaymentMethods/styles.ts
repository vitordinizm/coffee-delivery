import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const PaymentMethodsContainer = styled.div`
  margin-top: ${pxToRem(12)};
  padding: ${pxToRem(40)};
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const PaymentDescriptionContainer = styled.div`
  display: flex;
  gap: ${pxToRem(8)};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentDescriptionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(2)};
`

export const DescriptionTitle = styled.span`
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const DescriptionSubtitle = styled.span`
  font-size: ${pxToRem(14)};
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`

export const MethodsContainer = styled.div`
  margin-top: ${pxToRem(32)};
  display: flex;
  gap: ${pxToRem(12)};

  input[type='radio'].checked + label {
    padding: ${pxToRem(15)};
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const RadioLabel = styled.label`
  width: ${pxToRem(178)};
  padding: ${pxToRem(16)};
  display: flex;
  gap: ${pxToRem(12)};
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const TextLabel = styled.span`
  font-size: ${pxToRem(12)};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
`
