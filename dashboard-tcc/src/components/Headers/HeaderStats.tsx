import React, {useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client';
import env from 'react-dotenv';

const ENDPOINT = env.API_URL;
// const ENDPOINT = 'http://127.0.0.1:8888';

// components

import CardStats from '../Cards/CardStats';

export default function HeaderStats() {
  const semana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const [response, setResponse] = useState('');

  let livres = 0;
  let ocupadas = 0;
  let total = 0;

  let porcentagemLivres = 0;
  let porcentagemOcupadas = 0;

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(response);
    }, 1000);
    return () => clearInterval(interval);
  }, [response]);


  interface PropriedadesDaVaga {
    vaga: number;
    status: string;
  }[];

  // const vagasPorCorredor = 3;
  const array: PropriedadesDaVaga[] = [];

  for (let i = 0; i < response.length; i++) {
    array.push({
      vaga: i,
      status: response[i],
    });

    if (array.map((l) => l.status)[i] === 'Vaga livre') {
      livres++;
    } else
    if (array.map((o) => o.status)[i] === 'Vaga ocupada') {
      ocupadas++;
    }
  }

  total = array.map((t) => t.status).length;

  porcentagemLivres = Math.round((livres / total) * 100);
  porcentagemOcupadas = Math.round((ocupadas / total) * 100);

  // const timeElapsed = Date.now();
  // const today = new Date(timeElapsed);
  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-400 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">

              <div className="w-full xl:w-6/12 px-4">
                <CardStats
                  statSubtitle="Data"
                  statTitle={`${date}/${month}/${year}`}
                  statArrow="up"
                  statPercent={`${semana[newDate.getDay()]}`}
                  statPercentColor="text-gray-500"
                  statDescripiron=""
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-gray-300"
                />
              </div>
              <div className="w-full xl:w-6/12 px-4">
                <CardStats
                  statSubtitle="Condição Atual"
                  statTitle={`O estacionamento está com ${porcentagemLivres}% da capacidade livre!`}
                  statArrow="up"
                  statPercent={`Vagas ocupadas em ${porcentagemOcupadas}%`}
                  statPercentColor="text-yellow-500"
                  statDescripiron=""
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
