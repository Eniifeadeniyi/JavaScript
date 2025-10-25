def add_item(item,count,list = {}):
	if not item.isdigit():
		if isinstance(count,int):
			list[item.lower()] = count
			print("Item added successfully!")
			return list
		return "Number of item must be positive whole number digits!"	
	return "Please, enter the item, then the amount"


def update_count(item,count,new_count,list = {}):
	if type(new_count) == int:
		if new_count > 0:
			list[item.lower()] = count + new_count
			print("Number of item succesfully updated!")
			return list
		return "Number of item must be positive whole number digits!"

	return "Number of item must be positive whole number digits!"

def remove_item(item,count,deduct,list = {}):
	if not item.isdigit():
		if isinstance(deduct,int):
			if deduct <= count:
				list[item.lower()] = count - deduct
				print("Number of item successfully removed!")
				return list
			return "Insufficient amount of item!"
		return "Number of item must be positive whole number digits!"
	return "Please, enter the item, then the amount"
	

def remove_invalid_item(item,count,list = {}):
	return "Please, add item before removing!"



def show(list = {}):
	if list == {}:
		print("No items available!")
	for key,value in list.items():
		print(key,value)







