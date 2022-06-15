import { FC, useMemo } from "react";
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import Layout from "../../components/Layout";
import Table from "../../components/Table";
import useFetch from "../../hooks/useFetch";

const CustomerList: FC = () => {
  const { data } = useFetch("/customers");


  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "view",
        Cell: ({row: {original}}: any) => <Link to={`./${original.id}`}>View</Link>,
        defaultWidth: 30,
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Email",
        accessor: "attributes.email",
      },
      {
        Header: "Last Updated",
        accessor: "last_updated",
        Cell: ({value}: any) => <span>{format(value as number, 'PPpp')}</span>
      },
    ],
    []
  );

  return (
    <Layout title="Customers">
      <Table data={data?.customers} columns={columns} onSelect={(row) => console.log(row)} />
    </Layout>
  );
};

export default CustomerList;
