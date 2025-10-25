import unittest
from functions import *

class TestGroceryListManagerApp(unittest.TestCase):

	#add_item
	def test_that_add_item_exists(self):
		actual = add_item("Bread",5)
		expected = {"bread" : 5}
		self.assertEqual(actual,expected)

	def test_that_adding_the_already_existing_item_updates_its_count(self):
		actual = update_count("Bread",5,7,{"bread" : 5})
		expected = {"bread" : 12}
		self.assertEqual(actual,expected)
	
	def test_that_update_count_only_takes_positive_int(self):
		actual = update_count("Bread",5,-2,{"bread" : 5})
		expected = "Number of item must be positive whole number digits!"
		self.assertEqual(actual,expected)
		actual = update_count("Bread",5,"two",{"bread" : 5})
		expected = "Number of item must be positive whole number digits!"
		self.assertEqual(actual,expected)

	def test_that_item_can_only_be_a_word(self):
		actual = add_item("5", 6)
		expected = "Please, enter the item, then the amount"
		self.assertEqual(actual,expected)

	def test_that_number_of_item_can_only_be_a_digits(self):
		actual = add_item("Bread", "six")
		expected = "Number of item must be positive whole number digits!"
		self.assertEqual(actual,expected)

	def test_that_number_of_item_can_not_be_float(self):
		actual = add_item("Bread", 6.8)
		expected = "Number of item must be positive whole number digits!"
		self.assertEqual(actual,expected)

	#remove_item
	def test_that_you_can_remove_item(self):
		actual = remove_item("Bread",8,5,{"bread" : 8})
		expected = {"bread" : 3}
		self.assertEqual(actual,expected)

	def test_that_you_can_only_remove_item_that_exists(self):
		actual = remove_invalid_item("Water",2,{"bread": 8})
		expected = "Please, add item before removing!"
		self.assertEqual(actual,expected)

	def test_that_you_can_not_remove_more_than_the_amount_of_the_item(self):
		actual = remove_item("Bread",8,9,{"bread" : 8})
		expected = "Insufficient amount of item!"
		self.assertEqual(actual,expected)

	def test_that_remove_item_only_takes_in_whole_number_digits(self):
		actual = remove_item("Bread",9,8.2,{"bread" : 8})
		expected = "Number of item must be positive whole number digits!"
		self.assertEqual(actual,expected)
		actual = remove_item("5",6,6,{"bread" : 8})
		expected = "Please, enter the item, then the amount"
		self.assertEqual(actual,expected)

	


