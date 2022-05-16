import React, { useContext } from 'react'
import Wrapper from '../assets/wrappers/SearchContainer'
import { AppContext } from '../context/appContext'
import {FormRow , FormRowSelect} from "./index"
function SearchContainer() {
    const {
        handleChange,
        roleOptions ,
        positionOptions, 
        isLoading , 
        search ,
        sort,
        position,
        role,
        sortOptions,
        clearFilters
    } = useContext(AppContext)
    const handleSearch = (e) => {
        if (isLoading) return;
        handleChange({ name: e.target.name, value: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        clearFilters()
      };
  return (
    <Wrapper>
    <form className="form">
      <h4>search form</h4>
      {/* search name */}
      <div className="form-center">
        <FormRow
          type="text"
          name="search"
          value = {search} 
          handleChange={handleSearch}
        />
        {/* search by role */}
        <FormRowSelect
          labelText="role"
          name="role"
          value={role}
          handleChange={handleSearch}
          list={["all", ...roleOptions]}
        />
        {/* search by position */}

        <FormRowSelect
          labelText="position"
          name="position"
          value={position }
          handleChange={handleSearch}
          list={["all", ...positionOptions]}
        />
        {/* sort */}

        <FormRowSelect
          name="sort"
          value={sort}
          handleChange={handleSearch}
          list={sortOptions}
          labelText="Sort"
        />
        <button
          className="btn btn-block btn-danger"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          clear filters
        </button>
      </div>
    </form>
  </Wrapper>
  )
}

export default SearchContainer