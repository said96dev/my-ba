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
.work-form , .break-form {
    display:grid ;
    grid-template-columns:1fr 1fr ;
    column-gap:1rem ;
    
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
`
export default Wrapper
