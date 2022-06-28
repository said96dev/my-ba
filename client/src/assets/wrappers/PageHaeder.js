import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 2rem 2rem ;
  box-shadow: var(--shadow-2);
  display: flex;
  justify-content:space-between ;
  align-items:center ;
  
  h3 {
    margin: 0;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    font-size: 1.3rem;
    border-radius:2rem ;
    padding:.5rem 1.2rem ;
  }
  .icon {
      font-size:1.5rem ;
  }
  a {
    line-height:none ;
  }
  @media (max-width: 600px) {
    .btn{
      font-size:1rem ;
      padding: 0rem .8rem  ;
    }
    .icon{
      display:none ;
    }
    h3{
      font-size:1.3rem ;
    }
  }
  `
export default Wrapper