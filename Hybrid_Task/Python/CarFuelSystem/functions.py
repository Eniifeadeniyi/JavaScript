start = False
current_fuel = 0.0
distance_moved = 0.0
fuel_efficiency = 0.0
maximum_distance = 0.0

def check_start():
    return start

def set_fuel_efficiency(efficiency):
    if efficiency > 0:
        fuel_efficiency = efficiency

def check_fuel_level():
    return current_fuel

def set_maximum_distance():
    if fuel_efficiency > 0:
        maximum_distance = fuel_efficiency * 50


def start_car():
    start = True


def stop_car():
    start = False

def add_fuel(fuel):
    if current_fuel < 50.1 and fuel > 0 and fuel < 50.1:
        current_fuel += fuel

def move_car(distance):
    if distance > 0 and distance <= maximum_distance:
        distance_moved += distance
        fuel_used = distance / fuel_efficiency
        current_fuel  -= fuel_used

def get_distance_moved():
    return distance_moved
