import React, { useState, useCallback, useEffect } from 'react';
import { HamburgerCollapse } from 'react-animated-burgers';
import { Link } from 'react-router-dom';
import { NavBar, MenuMobile, MobileLink} from '../styled';

import Logo from '../../../images/MPlogo.png';

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )

  useEffect(() =>{
    const MenuMobile = document.getElementById("MenuMobile")
    
    if (isActive) {
      MenuMobile.style.transform = 'translateX(-145px)';
    } else {
      MenuMobile.style = {...MenuMobile.style};
    }
    
  }, [isActive])

  return (
    <>
      <NavBar id="begin">
      <Link to="/">
        <img src={Logo} alt="MatchPrint"/>
      </Link>  

      <div>
      </div>

      <HamburgerCollapse
        buttonColor="#0195D3"
        barColor="#fff"
        {...{ isActive, toggleButton }}
        buttonWidth={30}
      />

      </NavBar>
      <MenuMobile id="MenuMobile">

        <MobileLink as="a" href="/#begin">Sobre</MobileLink>

        <MobileLink as="a" href="/#clients">Depoimentos</MobileLink>
        
        <MobileLink as="a" href="/#products">Produtos</MobileLink>

        <MobileLink to="/contato">Contato</MobileLink>
      
      </MenuMobile>
    </> 
  )
}

export default MobileNav