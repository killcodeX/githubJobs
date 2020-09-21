import React from 'react';
import fetchJobApi from './fetchJobApi';

export default function Jobs() {

    const {jobs, loading, error } = fetchJobApi();

    return (
        <h1>hi</h1>
    )
}
