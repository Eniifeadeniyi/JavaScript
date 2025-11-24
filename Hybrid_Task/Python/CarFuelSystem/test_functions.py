import unittest
from functions import *

class Test_Functions(unittest.TestCase):
	def test_that_start_car_works(self):
		self.assertEqual(start_car(), True)

	def test_that_stop_car_works(self):
		self.assertEqual(stop_car(), False)

	def test_that_set_maximum_distance_works(self):
		self.assertEqual(set_maximum_distance(20),1000)

	def test_that_set_maximum_distance_doesnt_take_invalid_input(self):
		self.assertEqual(set_maximum_distance(-20), 0.0)

	def test_that_add_fuel_works(self):
		self.assertEqual(add_fuel(0.0,50), 50)

	def test_that_add_fuel_doesnt_take_invalid_input(self):
		self.assertEqual(add_fuel(0.0,-20),0.0)
	
	def test_that_add_fuel_doesnt_increase_pass_fifty(self):
		self.assertEqual(add_fuel(47.5,4),47.5)

	def test_that_move_car_works(self):
		self.assertEqual(move_car(50,1000,50,20,0), (50,47.5))

	def test_that_move_car_doesnt_take_invalid_input(self):
		self.assertEqual(move_car(-50,1000,50,20,0), (0,50))

