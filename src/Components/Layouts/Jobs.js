import React, { useContext } from "react";
import { MyContext } from "../Context/stateManager";
import { Row, Spin, Layout, notification } from "antd";
import JobListing from "./jobListing";
import JobPagination from './jobPaginations';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "NetWork Error",
    description: "Having issue communicating with the server.",
  });
};

export default function Jobs() {

  const { state } = useContext(MyContext);

  const { jobs, loading, error, page } = state; 

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
      <Row justify="center">
        {rendering()}
      </Row>
      <JobPagination style={{marginBottom:'30px'}} />
    </Layout.Content>
  );
}
