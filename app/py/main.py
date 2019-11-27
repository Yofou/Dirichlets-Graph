import eel
from random import randint
import math

def isPrimeNumber(x):

    if x >= 2:
        for y in range(2,x):
            if not ( x % y ):
                return False
    else:
	       return False

    return True

def polarToCords(num):

    x = num * math.cos(num)
    y = num * math.sin(num)

    return (x,y)

def update():

    plotted = 0

    for number in range(1,50000):

        coords = polarToCords(number)
        randomObj = {'x' : coords[0],'y' : coords[1]}

        if isPrimeNumber(number):
            eel.updateDataSet(randomObj,True)
        eel.sleep(0.001)

    eel.sleep(5)
    eel.reset()
    update()


eel.spawn(update)
