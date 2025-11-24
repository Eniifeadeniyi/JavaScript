def set_maximum_distance(fuel_efficiency):
    maximum_distance = 0.0
    if fuel_efficiency > 0:
        maximum_distance = fuel_efficiency * 50
    return maximum_distance

def start_car():
    return True

def stop_car():
    return False

def add_fuel(current_fuel = 0.0, fuel = 0.0):
    if current_fuel < 50.1 and fuel > 0 and fuel < 50.1 and (current_fuel + fuel) < 50.1:
        current_fuel += fuel
    return current_fuel

def move_car(distance,maximum_distance,current_fuel,fuel_efficiency,   distance_moved):
    if distance > 0 and distance <= maximum_distance:
        distance_moved += distance
        fuel_used = distance / fuel_efficiency
        current_fuel  -= fuel_used
    return distance_moved, current_fuel




