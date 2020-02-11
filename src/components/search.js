import React from 'react'
import {
    Form, Input,
  } from 'reactstrap';

function Search({ search }) {
    function submitForm(e) {
        e.preventDefault();
        let input = document.querySelector('#search')
        search(input.value)
    }

    return (
        <Form onSubmit={ (e) => submitForm(e) }>
            <Input type="search" name="search" id="search" placeholder="Search" className="mt-2" />
        </Form>
    )
}

export default Search