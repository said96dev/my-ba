import styled from 'styled-components'

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:1000;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;

  }
  background: var(--white);
  .btn-container {
    position: relative;
    display:grid ;
    grid-template-columns:auto auto ;
    font-size:1.75rem ;
    align-items:center ;
    width:20% ;
    justify-content:end ;
    gap:1rem ;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    border-radius:1rem ;
    background-color: var(--primaryLight);
    color : var(--primaryMain);
  }

  .dropdown {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: var(--primaryLight);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    font-size:1.5rem ;

  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
    display:flex ;
    align-items:center ;
    width:100% ;
    padding:10px ;
    
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  .notifications {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`
export default Wrapper
