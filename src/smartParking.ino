/***********************************/
/*          SMART PARKING          */
/***********************************/
// char result1[] = "{\"corredor\":1,\"sensor\":1,\"status\":\"livre\"}";

//Configuração de Distancia Mínima em centimetros
const int distancia_carro = 2;

//Configurações de Portas do Arduino

//Sensor
const int TRIG1 = 3;
const int ECHO1 = 2;

const int TRIG2 = 5;
const int ECHO2 = 4;

//Demais componentes
const int ledGreen1 = 7;
const int ledRed1 = 8;

const int ledGreen2 = 1;
const int ledRed2 = 2;

void setup()
{
    Serial.begin(9600);

    // Configurações do Sensor1
    pinMode(TRIG1, OUTPUT);
    pinMode(ECHO1, INPUT);

    // Configurações do LED1
    pinMode(ledGreen1, OUTPUT);
    pinMode(ledRed1, OUTPUT);

    // Configurações do Sensor2
    pinMode(TRIG2, OUTPUT);
    pinMode(ECHO2, INPUT);

    // Configurações do LED2
    pinMode(ledGreen2, OUTPUT);
    pinMode(ledRed2, OUTPUT);
}

void loop()
{
    char result1 = (verificacao1() == 1) ? 'livre' : 'ocupada');
    Serial.println(result1);
    char result2 = (verificacao2() == 1) ? 'livre' : 'ocupada');
    Serial.println(result2);
}

int sensor_morcego1(int pinotrig, int pinoecho)
{
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    return pulseIn(pinoecho, HIGH) / 58;
}

int verificacao1()
{
    int distancia1 = sensor_morcego1(TRIG1, ECHO1);

    if (distancia1 <= distancia_carro)
    {
        digitalWrite(ledGreen1, LOW);
        digitalWrite(ledRed1, HIGH);
        return 0;
    }
    else
    {
        digitalWrite(ledGreen1, HIGH);
        digitalWrite(ledRed1, LOW);
        return 1;
    }
    delay(100);
}

/*************************************************************************/

int sensor_morcego2(int pinotrig, int pinoecho)
{
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    return pulseIn(pinoecho, HIGH) / 58;
}

int verificacao2()
{
    int distancia2 = sensor_morcego2(TRIG2, ECHO2);

    if (distancia2 <= distancia_carro)
    {
        digitalWrite(ledGreen2, LOW);
        digitalWrite(ledRed2, HIGH);
        return 0;
    }
    else
    {
        digitalWrite(ledGreen2, HIGH);
        digitalWrite(ledRed2, LOW);
        return 1;
    }
    delay(100);
}

// /***********************************/
// /*          SMART PARKING          */
// /***********************************/
// #include <tuple>
// //Configuração de Distancia Mínima em centimetros
// const int distancia_carro = 2;

// //Configurações de Portas do Arduino

// //Sensor
// const int TRIG1 = 3;
// const int ECHO1 = 2;

// const int TRIG2 = 4;
// const int ECHO2 = 5;

// //Demais componentes
// const int ledGreen1 = 7;
// const int ledRed1 = 8;

// const int ledGreen2 = 9;
// const int ledRed2 = 10;

// void setup()
// {
//     Serial.begin(9600);

//     // Configurações do Sensor1
//     pinMode(TRIG1, OUTPUT);
//     pinMode(ECHO1, INPUT);

//     // Configurações do LED1
//     pinMode(ledGreen1, OUTPUT);
//     pinMode(ledRed1, OUTPUT);

//     // Configurações do Sensor2
//     pinMode(TRIG2, OUTPUT);
//     pinMode(ECHO2, INPUT);

//     // Configurações do LED2
//     pinMode(ledGreen2, OUTPUT);
//     pinMode(ledRed2, OUTPUT);
// }

// void loop()
// {
//     verificacao1();
//     verificacao2();
// }

// int sensor_morcego1(int pinotrig, int pinoecho)
// {
//     digitalWrite(pinotrig, LOW);
//     delayMicroseconds(2);
//     digitalWrite(pinotrig, HIGH);
//     delayMicroseconds(10);
//     digitalWrite(pinotrig, LOW);

//     return pulseIn(pinoecho, HIGH) / 58;
// }

// std::tuple<char, int> verificacao1()
// {
//     int distancia1 = sensor_morcego1(TRIG1, ECHO1);

//     if (distancia1 <= distancia_carro)
//     {
//         digitalWrite(ledGreen1, LOW);
//         digitalWrite(ledRed1, HIGH);
//         return {"Sensor 1", 0};
//     }
//     else
//     {
//         digitalWrite(ledGreen1, HIGH);
//         digitalWrite(ledRed1, LOW);
//         return {"Sensor 1", 1};
//     }
//     delay(100);
// }

// /*************************************************************************/

// int sensor_morcego2(int pinotrig, int pinoecho)
// {
//     digitalWrite(pinotrig, LOW);
//     delayMicroseconds(2);
//     digitalWrite(pinotrig, HIGH);
//     delayMicroseconds(10);
//     digitalWrite(pinotrig, LOW);

//     return pulseIn(pinoecho, HIGH) / 58;
// }

// std::tuple<int, int> verificacao2()
// {
//     int distancia2 = sensor_morcego2(TRIG2, ECHO2);

//     if (distancia2 <= distancia_carro)
//     {
//         digitalWrite(ledGreen2, LOW);
//         digitalWrite(ledRed2, HIGH);
//         return {"Sensor 2", 0};
//     }
//     else
//     {
//         digitalWrite(ledGreen2, HIGH);
//         digitalWrite(ledRed2, LOW);
//         return {"Sensor 2", 1};
//     }
//     delay(100);
// }
