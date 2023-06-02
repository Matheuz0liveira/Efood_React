import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  display: inline-block;
  position: relative;

  width: 472px;
  height: 400px;
`
export const Div = styled.div`
  background-color: ${cores.branco};
  padding: 8px;
  height: 181px;
  position: relative;
  border: solid #e66767;
  border-width: 0px 1px 1px 1px;

  p {
    color: ${cores.corTexto};
    font-size: 14px;
  }
`
export const Title = styled.h3`
  color: ${cores.corTexto};
  margin-bottom: 16px;
  font-size: 18px;
`
export const Stars = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  // text-align: center;

  position: absolute;
  right: 8px;
  top: 8px;

  font-weight: 700;
  font-size: 18px;
  color: ${cores.corTexto};

  img {
    margin-left: 8px;
    height: 20px;
    width: 21px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Button = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 8px;
`