import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Attribute } from "../../models/attribute.model";

interface AttributeListProps {
    id: string;
    data: Attribute;
}

const AttributeList: FC<AttributeListProps> = ({ id, data }) => {
    return (
      <>
        <h3>Attributes</h3>
        <Row>
          <Col>id</Col>
          <Col>{id}</Col>
        </Row>
        {Object.keys(data).map((attr, index) => (
          <Row key={index}>
            <Col>{attr}</Col>
            <Col>{data[attr]}</Col>
          </Row>
        ))}
      </>
    );
}

export default AttributeList;