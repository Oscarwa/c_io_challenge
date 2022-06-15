import { FC, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

interface NewItem {
    name: string;
    value: string;
  }

interface AttributeAddFormProps {
    onAdd: (item: NewItem) => void;
}

const AttributeAddForm: FC<AttributeAddFormProps> = ({ onAdd }) => {
  const [newItem, setNewItem] = useState<NewItem>({ name: "", value: "" });

  const onChangeItem = (event: any, attr: keyof NewItem) => {
    const _data = { ...newItem };
    _data[attr] = event.target.value;
    setNewItem(_data);
  };

  const _onAdd = () => {
    onAdd(newItem);
    setNewItem({ name: "", value: "" });
  };

  return (
    <>
      <Row className="mt-5">
        <Col sm={5}>
          <Form.Control
            type="text"
            size="sm"
            placeholder="name"
            value={newItem.name}
            onChange={(event) => onChangeItem(event, "name")}
          />
        </Col>
        <Col sm={5}>
          <Form.Control
            type="text"
            size="sm"
            placeholder="value"
            value={newItem.value}
            onChange={(event) => onChangeItem(event, "value")}
          />
        </Col>
        <Col sm={2}>
          <Button
            variant="link"
            onClick={_onAdd}
            disabled={!newItem.name || !newItem.value}
          >
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AttributeAddForm;