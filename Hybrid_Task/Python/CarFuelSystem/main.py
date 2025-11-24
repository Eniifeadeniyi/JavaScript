from functions import *

efficiency = input("Enter fuel efficiency: ")
while not efficiency.isdigit() or not efficiency.isdecimal():
    print("Invalid input")
    efficiency = input("Enter fuel efficiency: ")

efficiency = float(efficiency)
set_fuel_efficiency(efficiency)
set_maximum_distance()

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
            start_car()
        case "2":
            print(check_fuel_level())
        case "3":
            fuel = input("Enter fuel amount: ")
            while not fuel.isdigit() or not fuel.isdecimal():
                print("Invalid input")
                fuel = input("Enter fuel amount: ")
            fuel = float(fuel)
            add_fuel(fuel)
        case "4":
            if check_fuel_level() > 0.0 and check_start() == True:
                distance = input("Enter distance: ")
                while not distance.isdecimal() or not distance.isdigit():
                    print("Invalid input")
                    distance = input("Enter distance: ")
                distance = float(distance)
                move_car(distance)
                print("Moved " + str(distance) + " kilometers")
                print("Moved a total of " + str(get_distance_moved()) + " kilometers")
            else:
                print("Start car and add fuel first!")
        case "5":
            stop_car()
        case _:
            print("Invalid input")


