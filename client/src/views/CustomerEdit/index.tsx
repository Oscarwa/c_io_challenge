import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import useFetch from "../../hooks/useFetch";
import { formatDateTime } from "../../utils/dateUtils";
import EventList from "../../components/EventsList";
import AttributeListForm from "../../components/AttributeListForm";

const CustomerEdit: FC = () => {
  const { id } = useParams();
  const { data } = useFetch(`/customers/${id}`);

  useEffect(() => {
    console.log(data?.customer?.attributes);
  }, [data]);

  return data ? (
    <Layout>
      <>
        <Row>
          <Col>
            <h1>{data.customer.attributes.email}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Last updated: {formatDateTime(data.customer.last_updated)}</h4>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <AttributeListForm id={id ?? ""} data={data.customer.attributes} />
          </Col>
        </Row>
      </>
    </Layout>
  ) : null;
};

export default CustomerEdit;
