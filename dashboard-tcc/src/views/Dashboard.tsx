import React from 'react';

// components

// import CardLineChart from '../components/Cards/CardBarChart';
// import CardBarChart from '../components/Cards/CardBarChart';
// import CardPageVisits from '../components/Cards/CardPageVisits';
import Lotacao from '../components/Cards/Lotacao';
import CardStatus from '../components/Cards/CardStatus';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardStatus />
        </div>
        {/* <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div> */}
      </div>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div> */}
        <div className="w-full px-4">
          <Lotacao />
        </div>
      </div>
    </>
  );
}
