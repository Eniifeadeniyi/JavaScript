def turn_on():
    return True

def turn_off():
    return False


def change_gear(speed):
    if speed > -1 and speed < 21:
        gear = 1
    elif speed > 20 and speed < 31:
        gear = 2
    elif speed > 30 and speed < 41:
        gear = 3
    else:
        gear = 4
    return gear


def accelerate(speed):
    if turn_on():
        gear = change_gear(speed)
        if gear == 1:
            speed += 1
        elif gear == 2 :
            speed += 2
        elif gear == 3:
            speed += 3
        elif gear == 4:
            speed += 4
        gear = change_gear(speed)
    return gear

def decelerate(speed):
    if turn_on() and speed > 0:
        gear = change_gear(speed)
        if gear == 1:
            speed -= 1
        elif gear == 2 :
            speed -= 2
        elif gear == 3:
            speed -= 3
        elif gear == 4:
            speed -= 4
        gear = change_gear(speed)
    return gear