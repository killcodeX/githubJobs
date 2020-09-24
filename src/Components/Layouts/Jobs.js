import React, { useContext } from "react";
import { MyContext } from "../Context/stateManager";
import { Row, Spin, Layout, notification } from "antd";
import JobListing from "./jobListing";

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "NetWork Error",
    description: "Having issue communicating with the server.",
  });
};

export default function Jobs() {
  const { jobs } = useContext(MyContext);

  return (
    <Layout.Content style={{ padding: "0 50px" }}>
      <Row>
        {jobs ? (
          jobs.map((job) => <JobListing key={job.id} job={job} />)
        ) : (
          (openNotificationWithIcon('error')),
          <Spin style={{ display: "block", margin: "0 auto" }} size="large" />
        )}
      </Row>
    </Layout.Content>
  );
}
