import { type FC } from 'react';
import { Table } from 'antd';

const CustomTable:FC<{columns:any[], data:any[], loading?:boolean}> = ({columns, data, loading}) => (
    <Table<any> loading={loading} columns={columns} dataSource={data}/>
);

export default CustomTable;