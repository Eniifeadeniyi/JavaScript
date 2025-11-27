bike = {
    "is_on": False,
    "gear": 1,
    "speed": 0,
}

def reset():
    bike["is_on"] = False;
    bike["gear"] = 0
    bike["speed"] = 0

def turn_on():
    bike["is_on"] = True

def turn_off():
    bike["is_on"] = False

def change_gear():
    if bike["speed"] > -1 and bike["speed"] < 21:
        bike["gear"] = 1
    elif bike["speed"] > 20 and bike["speed"] < 31:
        bike["gear"] = 2
    elif bike["speed"] > 30 and bike["speed"] < 41:
        bike["gear"] = 3
    else:
        bike["gear"] = 4


def accelerate():
    if bike["is_on"] == True:
        change_gear()
        if bike["gear"] == 1:
            bike["speed"] += 1
        elif bike["gear"] == 2 :
            bike["speed"] += 2
        elif bike["gear"] == 3:
            bike["speed"] += 3
        elif bike["gear"] == 4:
            bike["speed"] += 4
        change_gear()

def decelerate():
    if bike["is_on"] == True and bike["speed"] > 0:
        change_gear()
        if bike["gear"] == 1:
            bike["speed"] -= 1
        elif bike["gear"] == 2 :
            bike["speed"] -= 2
        elif bike["gear"] == 3:
            bike["speed"] -= 3
        elif bike["gear"] == 4:
            bike["speed"] -= 4
        change_gear()