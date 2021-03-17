import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

interface Props {
  setSearchQuery(searchQuery: string): void
}

const SearchForm: React.FC<Props> = ({ setSearchQuery }: Props) => {
  const {
    register, handleSubmit, errors,
  } = useForm();

  const onSubmit = (data: { searchQuery: string }) => setSearchQuery(data.searchQuery);

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
