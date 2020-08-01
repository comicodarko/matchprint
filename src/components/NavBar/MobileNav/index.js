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
      <NavBar>
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

        <MobileLink>Sobre</MobileLink>

        <MobileLink>Depoimentos</MobileLink>
        
        <MobileLink>Produtos</MobileLink>

        <MobileLink>Contato</MobileLink>
      
      </MenuMobile>
    </> 
  )
}

export default MobileNav