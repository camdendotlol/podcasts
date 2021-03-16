import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

const SearchForm = () => {
  const {
    register, handleSubmit, errors,
  } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formSearch">
        <Form.Control name="searchQuery" ref={register} type="search" placeholder="Search" />
        { errors.searchQuery }
      </Form.Group>
      <Button variant="primary" type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
