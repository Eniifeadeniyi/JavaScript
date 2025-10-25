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
		case "1" :
			good = input("Enter name of item: ")
			count = input("Enter amount of " + str(good) + " needed: ")
			if count.isdigit():
				count = int(count)

			if good not in list:
				print(add_item(good,count,list))

			elif good in list:
				print(update_count(good,count,list))

		case "2":
			good = input("Enter name of item: ")
			count = input("Enter amount of " + str(good) + ": ")
			if count.isdigit():
				count = int(count)
		
			if good in list:
				print(remove_item(good,count,list))

			if good not in list:
				print(remove_invalid_item(good,count,list))
		case "4": 
			print("Thanks for shopping with us")
			print("See you later,bye!!!")
		case "3" : 
			if list == {}:
				print("No items available yet!")
			for key,value in list.items():
				print(f"{key} : {value}")
		case _: print("Please, enter a number from the options below: ")
