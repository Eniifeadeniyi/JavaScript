from functions import *

efficiency = input("Enter fuel efficiency: ")
while not efficiency.isdigit() or not efficiency.isdecimal():
    print("Invalid input")
    efficiency = input("Enter fuel efficiency: ")

efficiency = float(efficiency)
maximum = set_maximum_distance(efficiency)
distance_moved = 0.0
start = False
total_fuel = 0.0

menu = """
    1. Start Car
    2. Check Fuel level
    3. Add fuel
    4. Move Car
    5. Stop Car
"""
operation = ""
while operation != "5":
    print(menu)
    operation = input("Enter your choice: ")
    match operation:
        case "1":
            start = start_car()
        case "2":
            print(add_fuel(total_fuel))
        case "3":
            fuel = input("Enter fuel amount: ")
            while not fuel.isdigit() or not fuel.isdecimal():
                print("Invalid input")
                fuel = input("Enter fuel amount: ")
            fuel = float(fuel)
            total_fuel = add_fuel(total_fuel,fuel)
        case "4":
            if total_fuel > 0.0 and start == True:
                distance = input("Enter distance: ")
                while not distance.isdecimal() or not distance.isdigit():
                    print("Invalid input")
                    distance = input("Enter distance: ")
                distance = float(distance)
                distance_moved, total_fuel = move_car(distance, maximum, total_fuel, efficiency,distance_moved)
                print("Moved " + str(distance) + " kilometers")
                print("Moved a total of " + str(distance_moved) + " kilometers successfully")
            else:
                print("Start car and add fuel first!")
        case "5":
            start = stop_car()
        case _:
            print("Invalid input")


