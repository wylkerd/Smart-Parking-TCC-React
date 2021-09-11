import React from 'react';
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer} from 'recharts';

export default function CardLineChardInsight() {
  // quantos carros havia as 12h durante 10 dias
  const data = [
    {
      'dayOfMonth': '01/09',
      '17h': 10,
    },
    {
      'dayOfMonth': '02/09',
      '17h': 5,
    },
    {
      'dayOfMonth': '03/09',
      '17h': 10,
    },
    {
      'dayOfMonth': '04/09',
      '17h': 5,
    },
    {
      'dayOfMonth': '05/09',
      '17h': 4,
    },
    {
      'dayOfMonth': '06/09',
      '17h': 3,
    },
    {
      'dayOfMonth': '07/09',
      '17h': 5,
    },
    {
      'dayOfMonth': '08/09',
      '17h': 10,
    },
    {
      'dayOfMonth': '09/09',
      '17h': 3,
    },
    {
      'dayOfMonth': '10/09',
      '17h': 7,
    },
  ];

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Insight dos ultimos 10 dias
              </h3>
            </div>
          </div>
        </div>
        <div>
          <ResponsiveContainer width={'100%'} height={250}>
            <LineChart
              width={1500}
              height={250}
              data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              {/* <CartesianGrid strokeDasharray="3 3" />*/}
              <XAxis dataKey="dayOfMonth" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Line type="monotone" dataKey="17h" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
