# U3.W8-9: 


# I worked on this challenge [by myself ].

# 2. Pseudocode
#map! the array


# 3. Initial Solution

#def super_fizzbuzz(array)
#array.map!do|x|
#	if x%15 == 0
#		x = "FizzBuzz"
#	elsif x%5 == 0
#		x = "Buzz"
#	elsif x%3 == 0
#		x = "Fizz"
#	else
#		x = x
#	end
#end
#return array

#end



# 4. Refactored Solution
def super_fizzbuzz(array)
array.map!do|x|
	s = ''
	s += "Fizz" if x%3 == 0
	s += "Buzz" if x%5 == 0
	s.empty? ? x=x : x=s
	end
return array

end


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

p super_fizzbuzz([1,2,3])  == [1, 2, "Fizz"]
p super_fizzbuzz([1,2,5])  == [1, 2, "Buzz"]
p super_fizzbuzz([1,2,15]) == [1, 2, "FizzBuzz"]
p super_fizzbuzz([30, 9, 20, 1]) == ["FizzBuzz", "Fizz", "Buzz", 1]


# 5. Reflection 
# FizzBuzz is a problem I've solved before. This initial solution just required using 
# map! to modify the array in place. My refactored solution I found online because
# I was unhappy with my extensive if, elsif statements. What I like about the refactored
# solution is that it builds the FizzBuzz case out of the the two other cases by 
# adding the strings together. 