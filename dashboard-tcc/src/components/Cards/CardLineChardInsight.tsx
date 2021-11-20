import React from 'react';
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer} from 'recharts';

export default function CardLineChardInsight() {
  // quantos carros havia as 12h durante 10 dias
  const data = [
    {
      'dayOfMonth': '27/09',
      '9h': 14,
      '12h': 17,
      '17h': 11,
    },
    {
      'dayOfMonth': '28/09',
      '9h': 13,
      '12h': 23,
      '17h': 19,
    },
    {
      'dayOfMonth': '29/09',
      '9h': 20,
      '12h': 16,
      '17h': 19,
    },
    {
      'dayOfMonth': '30/09',
      '9h': 17,
      '12h': 15,
      '17h': 13,
    },
    {
      'dayOfMonth': '01/10',
      '9h': 34,
      '12h': 43,
      '17h': 24,
    },
    {
      'dayOfMonth': '04/10',
      '9h': 25,
      '12h': 27,
      '17h': 15,
    },
    {
      'dayOfMonth': '05/10',
      '9h': 17,
      '12h': 25,
      '17h': 16,
    },
    {
      'dayOfMonth': '06/10',
      '9h': 18,
      '12h': 21,
      '17h': 14,
    },
    {
      'dayOfMonth': '07/10',
      '9h': 42,
      '12h': 38,
      '17h': 25,
    },
    {
      'dayOfMonth': '08/10',
      '9h': 39,
      '12h': 40,
      '17h': 28,
    },
  ];

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Insight dos últimos 10 dias
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
              <Line type="monotone" dataKey="9h" stroke="#237a1b" />
              <Line type="monotone" dataKey="12h" stroke="#2b2685" />
              <Line type="monotone" dataKey="17h" stroke="#9c641b" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
