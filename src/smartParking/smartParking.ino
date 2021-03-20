/***********************************/
/*          SMART PARKING          */
/***********************************/

//Configuração de Distancia Mínima em centimetros
const int distancia_carro = 2;

//Configurações de Portas do Arduino

//Sensor
const int TRIG1 = 21;
const int ECHO1 = 20;

const int TRIG2 = 17;
const int ECHO2 = 16;

//Demais componentes
const int ledGreen1 = 19;
const int ledRed1 = 18;

const int ledGreen2 = 15;
const int ledRed2 = 14;

const int rows = 10;
const int columns = 3;

int status[rows][columns] = {
    {1, 1, 1},
    {1, 2, 1},
    {1, 3, 1},
    {1, 4, 1},
    {1, 5, 1},
    {1, 6, 1},
    {1, 7, 1},
    {1, 8, 1},
    {1, 9, 1},
    {1, 10, 1}};

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

    (verificacao1() == 1) ? status[0][2] = 1 : status[0][2] = 0;
    (verificacao2() == 1) ? status[1][2] = 1 : status[1][2] = 0;
    Serial.print("***********************************************************************");
    Serial.println("");
    Serial.print(status[0][0]);Serial.print("\t");Serial.print(status[0][1]);Serial.print("\t");Serial.println(status[0][2]);
    Serial.print(status[1][0]);Serial.print("\t");Serial.print(status[1][1]);Serial.print("\t");Serial.println(status[1][2]);
    
//    for (byte i = 0; i < sizeof(status); i = i + 1)
//    {
//        Serial.println(status[i][1][2]);
//    }
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
        return 1;
    }
    else
    {
        digitalWrite(ledGreen1, HIGH);
        digitalWrite(ledRed1, LOW);
        return 0;
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
        return 1;
    }
    else
    {
        digitalWrite(ledGreen2, HIGH);
        digitalWrite(ledRed2, LOW);
        return 0;
    }
    delay(100);
}
