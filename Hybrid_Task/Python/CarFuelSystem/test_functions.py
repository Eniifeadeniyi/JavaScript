import unittest
from functions import *

class Test_Functions(unittest.TestCase):
	def test_that_start_car_works(self):
		self.assertEqual(start_car(), True)

	def test_that_stop_car_works(self):
		self.assertEqual(stop_car(), False)

	def test_that_set_maximum_distance_works(self):
		self.assertEqual(set_maximum_distance(20), )
	

