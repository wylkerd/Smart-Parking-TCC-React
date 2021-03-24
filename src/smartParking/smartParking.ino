/***********************************/
/*          SMART PARKING          */
/***********************************/

//Configuração de Distancia Mínima em centimetros
const float min_distance = 3.5;

//Sensor
const int trigPin1 = 2;
const int echoPin1 = 23;

const int trigPin2 = 3;
const int echoPin2 = 22;

const int trigPin3 = 4;
const int echoPin3 = 24;

const int trigPin4 = 5;
const int echoPin4 = 25;

const int trigPin5 = 6;
const int echoPin5 = 27;

const int trigPin6 = 8;
const int echoPin6 = 28;

const int trigPin7 = 7;
const int echoPin7 = 29;

//LED´S
const int ledGreen1 = 21;
const int ledRed1 = 20;

const int ledGreen2 = 19;
const int ledRed2 = 18;

const int ledGreen3 = 15;
const int ledRed3 = 16;

const int ledGreen4 = 53;
const int ledRed4 = 52;

const int ledGreen5 = 51;
const int ledRed5 = 50;

const int ledGreen6 = 49;
const int ledRed6 = 48;

const int ledGreen7 = 46;
const int ledRed7 = 47;

// Array multidimensional

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
/////////////////////////////////////////////////
  // Configurações do Sensor2
  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);

  // Configurações do LED2
  pinMode(ledGreen2, OUTPUT);
  pinMode(ledRed2, OUTPUT);
/////////////////////////////////////////////
  // Configurações do Sensor3
  pinMode(trigPin3, OUTPUT);
  pinMode(echoPin3, INPUT);

  // Configurações do LED3
  pinMode(ledGreen3, OUTPUT);
  pinMode(ledRed3, OUTPUT);
//////////////////////////////////////////////////
  // Configurações do Sensor4
  pinMode(trigPin4, OUTPUT);
  pinMode(echoPin4, INPUT);

  // Configurações do LED5
  pinMode(ledGreen4, OUTPUT);
  pinMode(ledRed4, OUTPUT);
//////////////////////////////////////////////////
  // Configurações do Sensor5
  pinMode(trigPin5, OUTPUT);
  pinMode(echoPin5, INPUT);

  // Configurações do LED5
  pinMode(ledGreen5, OUTPUT);
  pinMode(ledRed5, OUTPUT);
/////////////////////////////////////////////////
  // Configurações do Sensor6
  pinMode(trigPin6, OUTPUT);
  pinMode(echoPin6, INPUT);

  // Configurações do LED6
  pinMode(ledGreen6, OUTPUT);
  pinMode(ledRed6, OUTPUT);
///////////////////////////////////////////////////
  // Configurações do Sensor7
  pinMode(trigPin7, OUTPUT);
  pinMode(echoPin7, INPUT);

  // Configurações do LED7
  pinMode(ledGreen7, OUTPUT);
  pinMode(ledRed7, OUTPUT);
}

void loop()
{

    (verifier1() == 1) ? status[0][2] = 1 : status[0][2] = 0;
    (verifier2() == 1) ? status[1][2] = 1 : status[1][2] = 0;
    (verifier3() == 1) ? status[2][2] = 1 : status[2][2] = 0;
    (verifier4() == 1) ? status[3][2] = 1 : status[3][2] = 0;
    (verifier5() == 1) ? status[4][2] = 1 : status[4][2] = 0;
    (verifier6() == 1) ? status[5][2] = 1 : status[5][2] = 0;
    (verifier7() == 1) ? status[6][2] = 1 : status[6][2] = 0;

    Serial.println("");
    Serial.print("Corredor");Serial.print("\t");Serial.print("Vaga");Serial.print("\t");Serial.println("Status");
    Serial.print(status[0][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[0][1]);Serial.print("\t");Serial.println(status[0][2] == 1 ? "Vaga livre" : "Vaga ocupada");
    Serial.print(status[1][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[1][1]);Serial.print("\t");Serial.println(status[1][2] == 1 ? "Vaga livre" : "Vaga ocupada");
    Serial.print(status[2][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[2][1]);Serial.print("\t");Serial.println(status[2][2] == 1 ? "Vaga livre" : "Vaga ocupada");
    Serial.print(status[3][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[3][1]);Serial.print("\t");Serial.println(status[3][2] == 1 ? "Vaga livre" : "Vaga ocupada");
    Serial.print(status[4][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[4][1]);Serial.print("\t");Serial.println(status[4][2] == 1 ? "Vaga livre" : "Vaga ocupada");
    Serial.print(status[5][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[5][1]);Serial.print("\t");Serial.println(status[5][2] == 1 ? "Vaga livre" : "Vaga ocupada");
    Serial.print(status[6][0]);Serial.print("\t");Serial.print("\t");Serial.print(status[6][1]);Serial.print("\t");Serial.println(status[6][2] == 1 ? "Vaga livre" : "Vaga ocupada");
    Serial.println("***********************************************************************");

    delay(100);
}

/*SENSOR 1****************************************************/
int sensor1(int pinotrig, int pinoecho){
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    int distance = pulseIn(pinoecho, HIGH) / 58;
    Serial.println(distance);
    return distance;
}

int verifier1(){
    int distance1 = sensor1(trigPin1, echoPin1);
    if (distance1 > min_distance){
        digitalWrite(ledGreen1, LOW);
        digitalWrite(ledRed1, HIGH);
        return 1;
    }
    else{
        digitalWrite(ledGreen1, HIGH);
        digitalWrite(ledRed1, LOW);
        return 0;
    }
    Serial.println(distance1);
    delay(100);
}

/*SENSOR 2****************************************************/
int sensor2(int pinotrig, int pinoecho){
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    return pulseIn(pinoecho, HIGH) / 58;
}

int verifier2(){
    int distance2 = sensor2(trigPin2, echoPin2);
    if (distance2 > min_distance){
        digitalWrite(ledGreen2, LOW);
        digitalWrite(ledRed2, HIGH);
        return 1;
    }
    else{
        digitalWrite(ledGreen2, HIGH);
        digitalWrite(ledRed2, LOW);
        return 0;
    }
    Serial.println(distance2);
    delay(100);
}

/*SENSOR 3****************************************************/
int sensor3(int pinotrig, int pinoecho){
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    return pulseIn(pinoecho, HIGH) / 58;
}

int verifier3(){
    int distance3 = sensor3(trigPin3, echoPin3);
    if (distance3 > min_distance)
    {
        digitalWrite(ledGreen3, HIGH);
        digitalWrite(ledRed3,LOW);
        return 1;
    }
    else
    {
        digitalWrite(ledGreen3, LOW);
        digitalWrite(ledRed3, HIGH);
        return 0;
    }
    Serial.println(distance3);
    delay(100);
}

/*SENSOR 4****************************************************/
int sensor4(int pinotrig, int pinoecho)
{
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);
    
    return pulseIn(pinoecho, HIGH) / 58;
}

int verifier4()
{
    int distance4 = sensor4(trigPin4, echoPin4);
    if (distance4 > min_distance)
    {
        digitalWrite(ledGreen4, HIGH);
        digitalWrite(ledRed4,LOW);
        return 1;
    }
    else
    {
        digitalWrite(ledGreen4, LOW);
        digitalWrite(ledRed4, HIGH);
        return 0;
    }
    Serial.println(distance4);
    delay(100);
}

/*SENSOR 5****************************************************/
int sensor5(int pinotrig, int pinoecho)
{
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);
    
    return pulseIn(pinoecho, HIGH) / 58;
}

int verifier5()
{
    int distance5 = sensor5(trigPin5, echoPin5);
    if (distance5 > min_distance)
    {
        digitalWrite(ledGreen5, HIGH);
        digitalWrite(ledRed5,LOW);
        return 1;
    }
    else
    {
        digitalWrite(ledGreen5, LOW);
        digitalWrite(ledRed5, HIGH);
        return 0;
    }
    Serial.println(distance5);
    delay(100);
}

/*SENSOR 6****************************************************/
int sensor6(int pinotrig, int pinoecho)
{
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    return pulseIn(pinoecho, HIGH) / 58;
}

int verifier6()
{
    int distance6 = sensor6(trigPin6, echoPin6);
    if (distance6 > min_distance)
    {
        digitalWrite(ledGreen6, HIGH);
        digitalWrite(ledRed6,LOW);
        return 1;
    }
    else
    {
        digitalWrite(ledGreen6, LOW);
        digitalWrite(ledRed6, HIGH);
        return 0;
    }
    Serial.println(distance6);
    delay(100);
}
/*SENSOR 7****************************************************/
int sensor7(int pinotrig, int pinoecho)
{
    digitalWrite(pinotrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinotrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinotrig, LOW);

    return pulseIn(pinoecho, HIGH) / 58;
}

int verifier7()
{
    int distance7 = sensor7(trigPin7, echoPin7);
    if (distance7 > min_distance)
    {
        digitalWrite(ledGreen7, HIGH);
        digitalWrite(ledRed7,LOW);
        return 1;
    }
    else
    {
        digitalWrite(ledGreen7, LOW);
        digitalWrite(ledRed7, HIGH);
        return 0;
    }
    Serial.println(distance7);
    delay(100);
}
