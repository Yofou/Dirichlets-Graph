import eel
from random import randint
from app.py import main

eel.init('app')
eel.start('html/main.html',block=False)

while True:
    eel.sleep(2)
