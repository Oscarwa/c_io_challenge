import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import useFetch from "../../hooks/useFetch";
import { formatDateTime } from "../../utils/dateUtils";
import AttributeList from "../../components/AttributeList";
import EventList from "../../components/EventsList";

const CustomerDetail: FC = () => {
  const { id } = useParams();
  const { data } = useFetch(`/customers/${id}`);

  useEffect(() => {

        console.log(data?.customer?.attributes)
    }, [data])

  return data ? (
    <Layout>
      <>
        <Row>
          <Col>
            <h1>{data.customer.attributes.email}</h1>
          </Col>
          <Col className="d-flex justify-content-end">
              <Link className="btn btn-primary d-flex align-items-center" to={`./edit`}>Edit Attributes</Link>
          </Col>
        </Row>
        <Row>
            <Col><h4>Last updated: {formatDateTime(data.customer.last_updated)}</h4></Col>
        </Row>
        <Row className="pt-4">
            <Col><AttributeList id={id ?? ''} data={data.customer.attributes} /></Col>
        </Row>
        <Row className="pt-4">
            <Col><EventList data={data.customer.events} /></Col>
        </Row>
      </>
    </Layout>
  ) : null;
};

export default CustomerDetail;
