import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

interface Props {
  setSearchQuery(searchQuery: string): void
}

type FormData = {
  searchQuery: string
}

const SearchForm: React.FC<Props> = ({ setSearchQuery }: Props) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: { searchQuery: string }) => setSearchQuery(data.searchQuery);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formSearch">
        <Form.Control {...register('searchQuery')} type="search" placeholder="Search" />
        { errors.searchQuery }
      </Form.Group>
      <Button variant="outline-primary" type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
