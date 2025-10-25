def add_item(item,count,list = {}):
	if not item.isdigit():
		if isinstance(count,int):
			list[item] = count
			print("Item added successfully!")
			return list
		return "Number of item must be positive whole number digits!"	
	return "Please, enter the item, then the amount"


def update_count(item,count,increase,list = {}):
	if type(increase) == int:
		if increase > 0:
			list[item.lower()] = count + increase
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











