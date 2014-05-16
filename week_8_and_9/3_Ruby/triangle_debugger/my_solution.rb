# U3.W8-9: Triangle Debugger


# I worked on this challenge [by myself].


# 1. Original Solution

#def valid_triangle?(a, b, c)
#  sum = a + b + c
 # if a != 0 && b != 0 && c != 0
#    if a >= b
#      largest = a
#      sum -= a
#    else largest = b
#      sum -= b
#    end
  
#      if c > largest
#       largest = c
#        sum = a + b
#     end
  
#    if sum > largest
#      return true
#    else return false
#    end
#  else return false
#  end
#end


# 2. Answer the question for each bug

# --- Bug 1 ---
# * what is the exact description of the error?
# in `valid_triangle?': wrong number of arguments (3 for 4) (ArgumentError)
#  from my_solution.rb:58:in `<main>'
# * what is the exact line number the error is appearing?
# the error is being triggered by line 58, but that's because I'm calling the method with three parameters.
# * before you fix the bug, what do you think is causing the error?
# The rspec tests expect the method to take three parameters, not four.

# --- Bug 2 ---
# * what is the exact description of the error? triangle should return false if any of the sides are 0
# * what is the exact line number the error is appearing? line 20 from the rspec file
# * before you fix the bug, what do you think is causing the error?
# line 11 should be AND not OR between all of the statements checking that sides are not 0, also true and false are in quotes
# on lines 26, 27, and 29

# --- Bug 3 ---
# * what is the exact description of the error? should return false for an invalid triangle, but it returns true
# * what is the exact line number the error is appearing? line 46 in the rspec file
# * before you fix the bug, what do you think is causing the error? The final check is supposed to be testing whether the sum
# of the two shorter sides is greater than the longest side, but right now it's always adding the largest side to the sum
# rather than subtracting it to get the sum of the other sides.


# 3. Refactored Solution (Comment the other code to run this)
def valid_triangle?(a, b, c)
return false if a == 0 || b == 0 || c == 0
if a + b > c && b + c > a && a + c > b
  return true
else
  return false
end
end    


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
p valid_triangle?(0,2,3)
puts valid_triangle?(3,4,5)

puts valid_triangle?(5,5,12)




# 5. Reflection 
# I feel confident in my debugging skills. With each error that came up I felt like I had a clear
# idea about the source of the error and how to fix it. I think my refactored solution to the 
# problem is much clearer and is more directly testing the validity of the triangle. 

