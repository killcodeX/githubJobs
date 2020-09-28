import React from 'react';
import { Pagination } from 'antd';

export default function JobPaginations(props) {
    return (
        <Pagination defaultCurrent={1} total={50} />
    )
}
