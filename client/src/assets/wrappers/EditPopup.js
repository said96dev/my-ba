import styled from 'styled-components'

const Wrapper = styled.div`
.edit-form {
    display:grid ;
    grid-template-columns:1fr 1fr ;
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
