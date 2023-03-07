import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { useContext } from 'react'

import * as S from './styles'
import logo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  const { coffeesState } = useContext(CoffeesContext)

  const { cartQuantity } = coffeesState

  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <S.HeaderRight>
        <S.LocationContainer>
          <MapPin size={22} />
          <span>Porto Alegre, RS</span>
        </S.LocationContainer>
        <Link to="/checkout">
          <S.CartContainer>
            <ShoppingCart size={22} />
            {cartQuantity >= 1 && (
              <S.BadgeContainer>
                <span>{cartQuantity}</span>
              </S.BadgeContainer>
            )}
          </S.CartContainer>
        </Link>
      </S.HeaderRight>
    </S.HeaderContainer>
  )
}
