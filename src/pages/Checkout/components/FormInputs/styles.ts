import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const FormInputsContainer = styled.div`
  margin-top: ${pxToRem(15)};
  padding: ${pxToRem(40)};
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const FormDescriptionContainer = styled.div`
  display: flex;
  gap: ${pxToRem(8)};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const FormDescriptionTextContainer = styled.div`
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

export const InputsWrapper = styled.div`
  margin-top: ${pxToRem(32)};
  display: grid;
  grid-template-areas:
    'cep cep cep'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';
`

export const Input = styled.input`
  padding: ${pxToRem(12)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${pxToRem(14)};
  line-height: 1.3;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:not(:first-child) {
    margin-top: ${pxToRem(16)};
  }
  span {
    font-size: ${pxToRem(12)};
    font-style: italic;
  }

  &[name='cep'] {
    width: ${pxToRem(200)};
    grid-area: cep;
  }

  &[name='rua'] {
    width: 100%;
    grid-area: rua;
  }

  &[name='numero'] {
    width: ${pxToRem(200)};
    margin-right: ${pxToRem(12)};
    grid-area: numero;
  }

  &[name='complemento'] {
    width: 100%;
    grid-area: complemento;
  }

  &[name='bairro'] {
    width: ${pxToRem(200)};
    margin-right: ${pxToRem(12)};
    grid-area: bairro;
  }

  &[name='cidade'] {
    width: ${pxToRem(276)};
    margin-right: ${pxToRem(12)};
    grid-area: cidade;
  }

  &[name='uf'] {
    width: ${pxToRem(60)};
    grid-area: uf;
  }
`
