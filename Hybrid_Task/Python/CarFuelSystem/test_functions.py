import unittest
from functions import *

class Test_Functions(unittest.TestCase):
    def test_that_check_start_works(self):
        start_car()
        self.assertEqual(check_start(), True)
        stop_car()
        self.assertEqual(check_start(), False)

