import React from 'react';

// components
import Lotacao from '../components/Cards/Lotacao';
import CardStatus from '../components/Cards/CardStatus';
import CardLineChardInsight from '../components/Cards/CardLineChardInsight';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardStatus />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <Lotacao />
        </div>
        <div className="w-full px-4">
          <CardLineChardInsight />
        </div>
      </div>
    </>
  );
}
