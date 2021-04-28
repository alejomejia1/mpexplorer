from machine import Pin
import time
led = None
Temp = None
Humedad = None
i = 1
def readDHT():
  global led, Temp, Humedad
  led.value(0)
  dht11.measure()
  Temp = dht11.temperature()
  Humedad = dht11.humidity()
  oled.fill(0)
  oled.text(str(('Temp :' + str(Temp))), 10 , 10)
  oled.text(str(('Hume :' + str(Humedad))), 10 , 20)
  oled.show()
  mqtt.connect()
  mqtt.publish('almejia/feeds/temp' , (str(Temp)))
  mqtt.disconnect()
  mqtt.connect()
  mqtt.publish('almejia/feeds/hume' , (str(Humedad)))
  mqtt.disconnect()
  led.value(1)
  time.sleep(1)


import network
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
led = Pin(2, Pin.OUT)
Temp = 0
import dht
import machine
dht11 = dht.DHT11(machine.Pin(4))
from machine import Pin, I2C
import ssd1306
from time import sleep
i2c = I2C(-1, scl=Pin(22), sda=Pin(21))
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)
oled.fill(0)
oled.text(str('IoT Test'), 10 , 10)
oled.show()
sleep(0.5)


if not wlan.isconnected():
  oled.fill(0)
  oled.text(str('Conectando..'), 5 , 10)
  oled.show()
  wlan.connect('Embebidos', '12345678')
  while not wlan.isconnected():
    pass

oled.fill(0)
oled.text(str('WiFi OK'), 10 , 10)
oled.show()
sleep(0.5)

import machine
from umqttsimple import MQTTClient
import ubinascii
server='10.0.0.1'
port=1883
user='mqtt'
passwd='mqtt'
CLIENT_ID = ubinascii.hexlify(machine.unique_id())
mqtt = MQTTClient(CLIENT_ID, server, port, user, passwd)
Temp = 0

while True :
  readDHT()
