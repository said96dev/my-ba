import styled from 'styled-components'

const Wrapper = styled.section`
margin: 3rem auto ;
.taskTable {
   padding: 2rem 2.5rem;
};
.action{
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 0 0.5rem;
   position: relative;
   font-size: 1.2rem;
   border-color: transparent;
   color: var(--primary-500);
   }
   .operating {

  color: green;
  //padding: 0.3em 0.5em;
   
}
`

export default Wrapper
