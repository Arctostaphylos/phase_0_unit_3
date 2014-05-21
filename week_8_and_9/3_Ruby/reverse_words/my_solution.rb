# U3.W8-9: Reverse Words


# I worked on this challenge [by myself].

# 2. Pseudocode
# method takes a sentence and returns the setence with the words reversed.
# first I'll break the sentence apart into an array of words, and then iterate
# through the array reversing each word. Finally I'll join the array elements
# back into a sentence


# 3. Initial Solution

def reverse_words(sentence)
	words = sentence.split(' ')
	words.map!{|word| word.reverse}
	result = words.join(' ')
end


# 4. Refactored Solution






# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

p reverse_words("Mary") == "yraM"
p reverse_words("I want a hamburger") == "I tnaw a regrubmah"




# 5. Reflection 
# This challege was very straightforward. My code passed the tests the first time, which
# I'm not sure has happened before. I don't see room for refactoring in my code. Finding
# the reverse method made this very easy.