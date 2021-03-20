/***********************************/
/*          SMART PARKING          */
/***********************************/

//Configuração de Distancia Mínima em centimetros
const int distancia_carro = 2;

long duration;
int distance;

//Configurações de Portas do Arduino

//Sensor
const int trigPin1 = 2;
const int echoPin1 = 40;

const int trigPin2 = 4;
const int echoPin2 = 36;

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

    verificacao1();
    verificacao2();
    
    Serial.println("");
    Serial.print("Corredor");Serial.print("\t");Serial.print("Vaga");Serial.print("\t");Serial.println("Status");
    Serial.print(status[0][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[0][1]);Serial.print("\t");Serial.println(status[0][2]);
    Serial.print(status[1][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[1][1]);Serial.print("\t");Serial.println(status[1][2]);
    Serial.println("***********************************************************************");
    delay(100);
    
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

//int sensor_morcego1(int pinotrig, int pinoecho)
//{
//  // Clears the trigPin
//  digitalWrite(pinotrig, LOW);
//  delayMicroseconds(2);
//  // Sets the trigPin on HIGH state for 10 micro seconds
//  digitalWrite(pinotrig, HIGH);
//  delayMicroseconds(10);
//  digitalWrite(pinotrig, LOW);
//  // Reads the echoPin, returns the sound wave travel time in microseconds
//  duration = pulseIn(pinoecho, HIGH);
//  // Calculating the distance
//  distance= duration*0.034/2;
//
//  return distance;
//}

void verificacao1()
{
    int distancia1 = sensor_morcego1(trigPin1, echoPin1);

    if (distancia1 <= distancia_carro)
    {
        digitalWrite(ledGreen1, LOW);
        digitalWrite(ledRed1, HIGH);
        status[0][2] = 0;
    }
    else
    {
        digitalWrite(ledGreen1, HIGH);
        digitalWrite(ledRed1, LOW);
        status[0][2] = 1;
    }
    Serial.println(distancia1);
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

//int sensor_morcego2(int pinotrig, int pinoecho)
//{
//  // Clears the trigPin
//  digitalWrite(pinotrig, LOW);
//  delayMicroseconds(2);
//  // Sets the trigPin on HIGH state for 10 micro seconds
//  digitalWrite(pinotrig, HIGH);
//  delayMicroseconds(10);
//  digitalWrite(pinotrig, LOW);
//  // Reads the echoPin, returns the sound wave travel time in microseconds
//  duration = pulseIn(pinoecho, HIGH);
//  // Calculating the distance
//  distance= duration*0.034/2;
//
//  return distance;
//}

void verificacao2()
{
    int distancia2 = sensor_morcego2(trigPin2, echoPin2);

    if (distancia2 <= distancia_carro)
    {
        digitalWrite(ledGreen2, LOW);
        digitalWrite(ledRed2, HIGH);
        status[1][2] = 0;
    }
    else
    {
        digitalWrite(ledGreen2, HIGH);
        digitalWrite(ledRed2, LOW);
        status[1][2] = 1;
    }
    Serial.println(distancia2);
    delay(100);
}
