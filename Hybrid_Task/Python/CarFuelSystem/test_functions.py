import unittest
from functions import *

class Test_Functions(unittest.TestCase):
	def test_that_start_car_works(self):
		self.assertEqual(start_car(), True)
	

