import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Event } from "../../models/event.model";

interface EventListProps {
    data: Event;
}

const EventList: FC<EventListProps> = ({ data }) => {
    return (
      <>
        <h3>Events</h3>
        <Row><Col><strong>Event name</strong></Col><Col><strong>count</strong></Col></Row>
        {Object.keys(data).map((attr, index) => (
          <Row key={index}>
            <Col>{attr}</Col>
            <Col>{data[attr]}</Col>
          </Row>
        ))}
      </>
    );
}

export default EventList;