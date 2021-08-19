import React, {useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client';
import env from 'react-dotenv';
// const ENDPOINT = 'http://127.0.0.1:8888';
// const ENDPOINT = 'https://b7f463241de6.ngrok.io';

const ENDPOINT = env.API_URL || 'http://127.0.0.1:8888';

export default function CardStatus() {
  const [response, setResponse] = useState('');

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

  function renderTableData() {
    for (let i = 0; i < response.length; i++) {
      array.push({
        vaga: i,
        status: response[i],
      });
    }
    return array.map((dados, index) => {
      const {status, vaga} = dados; // destructuring
      return (
        <tr key={vaga}>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            1
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {vaga + 1}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {status == 'Vaga livre' ? 'Livre' : 'Ocupada' }
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Monitoramento de vagas
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              {/* <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Ver Todas
              </button> */}
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Corredor
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nº da Vaga
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
