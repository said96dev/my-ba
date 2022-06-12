import styled from 'styled-components'

const Wrapper = styled.div`
.form {
    max-width:100% ;
}
.form-title {
        grid-column-start:1 ;
        grid-column-end:3 ;
        display:flex ;
        align-items:center ;
        width: 100%;
    }
.vacation-form {
    display:grid ;
    grid-template-columns:1fr 1fr ;
    gap:1rem ;
}
.work-form  {
    display:grid ;
    grid-template-columns:1fr 1fr ;
    column-gap:1rem ;
    .work{
        display:flex ;
        flex-direction:column ;
        row-gap:1rem
    }
    
}
.full-row {
    grid-column:1/3 ;
}
.new-row {
    grid-column-start : 1 ;
}
.delete-btn {
    color: #808080;
}
.delete-btn:hover {
    color: #842029;
}

@media (max-width: 880px) { 
    .work-form{
        grid-template-columns:repeat(1 , 1fr);
        row-gap:1rem ;
        .res-fullRow {
            grid-column:1/3 ;
        }
    }
    
}
`
export default Wrapper
