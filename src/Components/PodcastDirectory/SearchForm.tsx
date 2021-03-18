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
  // TODO: remove the below eslint exception once react-hook-form v7 comes out
  // see https://github.com/react-hook-form/react-hook-form/issues/2887#issuecomment-767142861
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit, errors } = useForm<FormData>();

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
