import styled from 'styled-components'

const Wrapper = styled.section`
margin: 3rem auto ;
.taskTable {
   padding: 2rem 2.5rem 0 2.5rem;
};
.action{
   display: flex;
   align-items: center;

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
.done {
   text-decoration:line-through
}
.MuiGrid-root  {
   align-items:center ;
   row-gap:1rem ;
   flex-direction:row ;
}
`

export default Wrapper
