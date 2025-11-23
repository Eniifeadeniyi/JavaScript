"""
Given two sorted arrays, merge them into a single sorted array.

Input:
Two sorted integer arrays.

Output:
A single sorted array.

Example:
Input: [1,3,5] and [2,4,6]
Output: [1,2,3,4,5,6]

You’re given a list of n integers that contain all numbers from 1 to n+1 except one missing number.
Find the missing number without sorting the list.

Input: [2, 4, 1, 3, 6]
Output: 5
Write a function that returns the first character in a string that doesn’t repeat.
If all characters repeat, return '_'.

Input: "aabbcdeff"
Output: 'c'
Rotate the elements of a list to the right by k positions.
Modify the list in-place.

Input: [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
"""
#4
def hi(list,k):
	output = []
	for count in range(k):
		list[count] = list[-1:-k-1:-1]


#3
def unique_letter(string):
	for letter in string:
		count = string.count(letter)
		while count < 2:
			return letter
print(unique_letter("aabbcdeff"))

#2
def spot_error(list):
	large = max(list)
	correct = [num for num in range(1,large+1)]
	for number in correct:
		if number not in list:
			print(number)

spot_error([2,4,1,3,6,7,10])

#1
def ascending_order(list1,list2):
	list1.extend(list2)
	list1.sort()
	return list1

print(ascending_order([1,3,5],[2,4,6]))