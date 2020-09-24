import React from "react";
import { Button, Card, Col, Divider } from "antd";

export default function JobListing(props) {
  const { job } = props;

  return (
    <Col span={18} offset={4} style={{ paddingBottom: "50px" }}>
      <Card className="jobCards">
        <div className="card-header">
          <p>
            {job.title} <span>{job.company}</span>
          </p>
          
        </div>
        {/* <Divider/> */}
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <Button>
          <a href={job.url}>Apply</a>
        </Button>
      </Card>
    </Col>
  );
}
