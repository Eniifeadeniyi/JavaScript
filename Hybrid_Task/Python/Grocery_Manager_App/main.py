from functions import *
list = {}

print("Welcome to Eniife's Supermart!")
menu = """
	1. Add item.
	2. Remove Item.
	3. Show all available items.
	4. Exit
"""
operation = ""
while operation != "4":
	print(menu)
	operation = input("Enter an operation: ")
	match operation:
		case "4": 
			print("Thanks for shopping with us")
			print("See you later,bye!!!")
		case "3" : show(list)
		case _: print("Please, enter a number from the options below: ")
	