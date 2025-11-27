import unittest
from functions import *

class TestFunctions(unittest.TestCase):
    def test_that_turn_on_works(self):
        actual = turn_on()
        expected = True
        self.assertEqual(actual,expected)  # add assertion here
