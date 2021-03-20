/***********************************/
/*          SMART PARKING          */
/***********************************/

//Configuração de Distancia Mínima em centimetros
const int min_distance = 3;

//Sensor
const int trigPin1 = 2;
const int echoPin1 = 53;

const int trigPin2 = 4;
const int echoPin2 = 52;

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
    pinMode(trigPin1, OUTPUT);
    pinMode(echoPin1, INPUT);

    // Configurações do LED1
    pinMode(ledGreen1, OUTPUT);
    pinMode(ledRed1, OUTPUT);

    // Configurações do Sensor2
    pinMode(trigPin2, OUTPUT);
    pinMode(echoPin2, INPUT);

    // Configurações do LED2
    pinMode(ledGreen2, OUTPUT);
    pinMode(ledRed2, OUTPUT);
}

void loop()
{

    (verifier1() == 1) ? status[0][2] = 1 : status[0][2] = 0;
    (verifier2() == 1) ? status[1][2] = 1 : status[1][2] = 0;

    Serial.println("");
    Serial.print("Corredor");
    Serial.print("\t");
    Serial.print("Vaga");
    Serial.print("\t");
    Serial.println("Status");
    Serial.print(status[0][0]);
    Serial.print("\t");
    Serial.print("\t");
    Serial.print(status[0][1]);
    Serial.print("\t");
    Serial.println(status[0][2]);
    Serial.print(status[1][0]);
    Serial.print("\t");
    Serial.print("\t");
    Serial.print(status[1][1]);
    Serial.print("\t");
    Serial.println(status[1][2]);
    Serial.println("***********************************************************************");
}

int sensor1(int pinotrig, int pinoecho)
{
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    return pulseIn(pinoecho, HIGH) / 58;
}

int verifier1()
{
    int distance1 = sensor1(trigPin1, echoPin1);
    if (distance1 > min_distance)
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
    Serial.println(distance1);
    delay(100);
}

/*************************************************************************/

int sensor2(int pinotrig, int pinoecho)
{
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    return pulseIn(pinoecho, HIGH) / 58;
}

int verifier2()
{
    int distance2 = sensor2(trigPin2, echoPin2);
    if (distance2 > min_distance)
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
    Serial.println(distance2);
    delay(100);
}