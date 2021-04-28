# This file is executed on every boot (including wake-boot from deepsleep)
#import esp
#esp.osdebug(None)

import network
from machine import Pin, I2C
from time import sleep
import ssd1306
import framebuf

led = Pin(2, Pin.OUT)

led.on()
sleep(0.2)
led.off()

ap = network.WLAN(network.AP_IF)
ap.active(True)
ap.config(essid='ESP32_BOARD.1')
ap.config(authmode=3, password='12345678')

import webrepl
webrepl.start()

i2c = I2C(-1, scl=Pin(22), sda=Pin(21))
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)
oled.fill(0)

oled.invert(1)
with open('logo.pgm', 'rb') as f:
    f.readline() # Magic number
    f.readline() # Creator comment
    f.readline() # Dimensions
    data = bytearray(f.read())

for x in range(128):
    for y in range(64):
        c = data[x + y*128]
        oled.pixel(x, y, 1 if c == 255 else 0)

oled.show()


led.on()
