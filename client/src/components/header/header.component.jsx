import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {selectCartHidden}  from '../../redux/cart/cart.selectors';
import {selectCurrentUser, selectDisplayName} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';
import {signInSuccess} from '../../redux/user/user.actions';
import './header.styles.scss';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,Displayname} from './header.styles';


const Header =({currentUser,hidden,signOutStart,signInSuccess,displayName}) =>(
<HeaderContainer>
<LogoContainer to='/'>
<Logo className='logo' />
</LogoContainer>
<OptionsContainer>
{
displayName ?(   
    <div className='js-nametag'>Welcome {displayName} !</div>
    
    )
    :(
        <Displayname></Displayname>
    )
}
<OptionLink  to='/shop'>
SHOP
</OptionLink>
<OptionLink to="/contact">
CONTACT
</OptionLink>
{
currentUser ?(   
<OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
)
:(
<OptionLink className="option" to='/signin'>SIGN IN</OptionLink>


)}
<CartIcon />
</OptionsContainer>
{hidden ? null : <CartDropdown/> }
</HeaderContainer>
);

const mapStateToProps= createStructuredSelector({
currentUser:selectCurrentUser,
hidden:selectCartHidden,
displayName:selectDisplayName

});

const mapDispatchToProps=dispatch =>({
    signOutStart:()=> dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);