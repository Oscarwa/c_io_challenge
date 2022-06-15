import { FC, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Attribute } from "../../models/attribute.model";
import AttributeAddForm from "../AttributeAddForm";

interface AttributeListFormProps {
  id: string;
  data: Attribute;
}

const AttributeListForm: FC<AttributeListFormProps> = ({ id, data }) => {
  const [formData, setFormData] = useState(data);

  const onChangeAttribute = (event: any, attr: string) => {
    const _data = { ...formData };
    _data[attr] = event.target.value;
    setFormData(_data);
  };

  const onDiscard = () => {
    setFormData(data);
  };
  const onSave = () => {};
  
  const onAdd = (newItem: any) => {
    const _data = { ...formData };
    _data[newItem.name] = newItem.value;
    setFormData(_data);
  };

  const onRemove = (attr: string) => {
    const _data = { ...formData };
    delete _data[attr];
    setFormData(_data);
  }

  return (
    <>
      <h3>Attributes</h3>
      <Row className="pb-3">
        <Col sm={3}>id</Col>
        <Col sm={6}>{id}</Col>
      </Row>
      {Object.keys(formData).map((attr, index) => (
        <Row key={index} className="mb-2">
          <Col sm={3}>{attr}</Col>
          <Col sm={6} className="d-flex">
            <Form.Control
              type="text"
              size="sm"
              value={formData[attr]}
              onChange={(event) => onChangeAttribute(event, attr)}
            />
            <Button variant="link" onClick={() => onRemove(attr)}>
              Remove
            </Button>
          </Col>
        </Row>
      ))}

      <AttributeAddForm onAdd={onAdd} />

      <Row className="mt-5">
        <Col className="d-flex justify-content-end">
          <Button className="me-2" variant="link" onClick={onDiscard}>
            Discard changes
          </Button>
          <Button onClick={onSave}>Save changes</Button>
        </Col>
      </Row>
    </>
  );
};

export default AttributeListForm;
