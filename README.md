# Smart-Parking-TCC :traffic_light:	:construction:	

## Steps to run
- Start the smartParking.ino code, with Arduino Mega or Mega 250 on the correct COM (if necessary add a new port in the operating system settings)
- Start the frontend server with command 'npm start'
- Access the port in the browser (by default http://localhost:3000 OR https://litoral-parking.netlify.app/monitoring )

- To run the server api, we are using the NGROK tool ( https://ngrok.com/download ) and the page is being hosted on a Netlify account

- How to use? https://medium.com/desenvolvendo-com-paixao/ngrok-do-localhost-para-o-mundo-5445ad08419

- After starting, just change the ENDPOINT and push the repository to be updated by Netlify

## Passos para executar
- Inicie o código smartParking.ino, com Arduino Mega ou Mega 250 no COM correto (se necessário, adicione uma nova porta nas configurações do sistema operacional)
- Inicie o servidor front-end com o comando 'npm start'
- Acesse a porta no navegador (por padrão http: // localhost: 3000 OU https://litoral-parking.netlify.app/monitoring)

- Para executar a API do servidor, estamos usando a ferramenta NGROK (https://ngrok.com/download) e a página está sendo hospedada em uma conta Netlify

- Como usar? https://medium.com/desenvolvendo-com-paixao/ngrok-do-localhost-para-o-mundo-5445ad08419

- Rodar em um novo CMD qualquer o comando "ngrok http 8888" e passar a nova URL de acesso HTTPS

- Após iniciar, basta alterar a url de ENDPOINT, no app React e enviar o repositório para ser atualizado pelo Netlify
