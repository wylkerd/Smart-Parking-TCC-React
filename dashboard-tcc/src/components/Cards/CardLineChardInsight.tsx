import React from 'react';
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer} from 'recharts';

export default function CardLineChardInsight() {
  // quantos carros havia as 12h durante 10 dias
  const data = [
    {
      'dayOfMonth': '01/09',
      '8h': Math.floor(Math.random() * 11),
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '02/09',
      '8h': Math.floor(Math.random() * 11),
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '03/09',
      '8h': Math.floor(Math.random() * 11),
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '04/09',
      '8h': Math.floor(Math.random() * 11),
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '05/09',
      '8h': 4,
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '06/09',
      '8h': Math.floor(Math.random() * 11),
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '07/09',
      '8h': Math.floor(Math.random() * 11),
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '08/09',
      '8h': Math.floor(Math.random() * 11),
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '09/09',
      '8h': Math.floor(Math.random() * 11),
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
    },
    {
      'dayOfMonth': '10/09',
      '8h': 7,
      '12h': Math.floor(Math.random() * 11),
      '17h': Math.floor(Math.random() * 11),
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
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="8h" stroke="#237a1b" />
              <Line type="monotone" dataKey="12h" stroke="#2b2685" />
              <Line type="monotone" dataKey="17h" stroke="#9c641b" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
