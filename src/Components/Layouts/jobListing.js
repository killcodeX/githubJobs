import React from "react";
import { Button, Card, Col, Divider, Badge, Collapse } from "antd";
import ReactMarkdown from "react-markdown";

export default function JobListing(props) {
  const { job } = props;

  return (
    <Col xs={20} md={18} className='alignCenter' style={{ paddingBottom: "50px" }}>
      <Card className="jobCards">
        <div className="card-header">
          <div className="header-left">
            <p>
              {job.title}{" "}
              <span style={{ color: "#F76F71", fontWeight: "bold" }}>
                {job.company}
              </span>
            </p>
            <p>{new Date(job.created_at).toLocaleDateString()}</p>
            <div className="badges">
              <Badge style={{ backgroundColor: "#2779F3" }} count={job.type} />
              <Badge
                style={{ backgroundColor: "#57D2AD", marginLeft: "30px", wordBreak:'break-all'}}
                count={job.location}
              />
            </div>
          </div>
          <div className="header-right">
            <img
              src={job.company_logo}
              alt={job.company}
              height="50"
              width="150"
            />
          </div>
        </div>
        <Divider />
        <div style={{wordBreak:'break-all'}}>
          <ReactMarkdown source={job.how_to_apply} />
        </div>
        {/* <Button>
          <a href={job.url}>Apply</a>
        </Button> */}
        <Collapse accordion>
          <Collapse.Panel header="Read More About the Job" key="1">
            <ReactMarkdown>{job.description}</ReactMarkdown>
          </Collapse.Panel>
        </Collapse>
      </Card>
    </Col>
  );
}
