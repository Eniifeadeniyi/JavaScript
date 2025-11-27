import unittest
from functions import *

class TestFunctions(unittest.TestCase):
    def test_that_turn_on_works(self):
        turn_on()
        self.assertEqual(bike["is_on"],True)

    def test_that_turn_off_works(self):
        reset()
        turn_on()
        turn_off()
        self.assertEqual(bike["is_on"], False)

    def test_that_accelerate_works(self):
        reset()
        turn_on()
        accelerate()
        self.assertEqual(bike["speed"], 1)

    def test_that_accelerate_works_only_if_bike_is_on(self):
        reset()
        accelerate()
        self.assertEqual(bike["speed"], 0)

    def test_that_decelerate_works(self):
        reset()
        turn_on()
        accelerate()
        decelerate()
        self.assertEqual(bike["speed"], 0)

    def test_that_decelerate_works_only_if_bike_is_on(self):
        reset()
        turn_on()
        accelerate()
        turn_off()
        decelerate()
        self.assertEqual(bike["speed"], 1)

    def test_that_decelerate_does_not_work_if_speed_is_zero(self):
        reset()
        turn_on()
        accelerate()
        decelerate()
        decelerate()
        self.assertEqual(bike["speed"], 0)

    def test_that_gear_automatically_changes_as_speed_changes_range(self):
        reset()
        turn_on()
        for count in range(25):
            accelerate()
        self.assertEqual(bike["gear"], 2)

    def test_that_gear_automatically_changes_as_speed_reduces_and_changes_range(self):
        reset()
        turn_on()
        for count in range(21):
            accelerate()
        decelerate()
        self.assertEqual(bike["gear"], 1)



