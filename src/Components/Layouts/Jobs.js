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
  const { state } = useContext(MyContext);

  const { jobs, loading, error } = state; 

  // let jobb = jobs.map((job) => <JobListing key={job.id} job={job} />

  // let spin = <Spin style={{ display: "block", margin: "0 auto" }} size="large" />

  // let errors = (openNotificationWithIcon('error')),
  // Spin style={{ display: "block", margin: "0 auto" }} size="large" />

  function rendering () {
    if(loading == false && error == false)
      return jobs.map((job) => <JobListing key={job.id} job={job} />)
    if(loading == true && error == false)
      return <Spin style={{ display: "block", margin: "0 auto" }} size="large" />
    if(loading == true && error == true)
      return (openNotificationWithIcon('error')), <Spin style={{ display: "block", margin: "0 auto" }} size="large" />
  }

  return (
    <Layout.Content style={{ padding: "0 50px" }}>
      <Row>
        {rendering()}
      </Row>
    </Layout.Content>
  );
}

// <Spin style={{ display: "block", margin: "0 auto" }} size="large" />)
// jobs.map((job) => <JobListing key={job.id} job={job} />
// (openNotificationWithIcon('error')),


//  <Spin style={{ display: "block", margin: "0 auto" }} size="large" />
// ) : ((openNotificationWithIcon('error')),
// Spin style={{ display: "block", margin: "0 auto" }} size="large" />