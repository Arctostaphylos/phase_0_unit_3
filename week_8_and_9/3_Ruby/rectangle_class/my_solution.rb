# U3.W8-9: Implement a Rectangle Class


# I worked on this challenge [by myself].

# 2. Pseudocode



# 3. Initial Solution
class Rectangle
  attr_accessor :width, :height

  def initialize(width, height)
    @width  = width
    @height = height
  end

  def ==(other)
    (other.width  == self.width && other.height == self.height ) ||
    (other.height == self.width && other.width  == self.height )
  end

  def area
  	return @width*@height
  end

  def perimeter
  	return (2*@width) + (2*@height)
  end

  def diagonal
  	return Math.sqrt(@width*@width + @height*@height)
  end

  def square?
  	return @width == @height
  end

end




# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE

rectangle = Rectangle.new(10,20)
square = Rectangle.new(10,10)

puts rectangle.perimeter == 60
p square.perimeter == 40
p rectangle.area == 200
p square.area == 100
p rectangle.diagonal == 22.360679774997898
p rectangle.square? == false
p square.square? == true

# 5. Reflection 
# This challege was really straightforward and I don't think held anything new for me,
# particularly since the initialization and comparison methods were already written.