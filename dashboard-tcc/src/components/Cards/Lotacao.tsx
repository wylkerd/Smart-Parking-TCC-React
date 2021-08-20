import React, {useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client';
import env from 'react-dotenv';
// const ENDPOINT = 'http://127.0.0.1:8888';
// const ENDPOINT = 'https://b7f463241de6.ngrok.io';

const ENDPOINT = env.API_URL;


export default function Lotacao() {
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
    } else if (array.map((o) => o.status)[i] === 'Vaga ocupada') {
      ocupadas++;
    }
  }

  total = array.map((t) => t.status).length;

  porcentagemLivres = Math.round((livres / total) * 100);
  porcentagemOcupadas = Math.round((ocupadas / total) * 100);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Lotação
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              {/* <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Ver tudo
              </button> */}
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Condição
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Quantidade
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Livres
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {livres}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">{porcentagemLivres}%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                        <div
                          style={{width: `${porcentagemLivres}%`}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  Ocupadas
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {ocupadas}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">{porcentagemOcupadas}%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-yellow-200">
                        <div
                          style={{width: `${porcentagemOcupadas}%`}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
