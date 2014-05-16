# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1. Kris Shanks
# 2. Colin Trent
 
# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to add something to you list
# As a user, I want to list the quantity needed of each item
# As a user, I want to check off items as you purchase them
# As a user, I want to remove an item from the list
# As a user, I want to change the quantity needed of each item

# variable scopes  : CONSTANT = constant,        @@variable = class level variable
#                    $variable = global variable  @variable = instance variable 

# Pseudocode
# create class Item
# class takes two arguments: item_name and quantity, quantity is 1 unless otherwise stated
# item_name and quantity and purchased are instance variables
# purchased is set at false
# create class Grocery_list
# create an instance variable that is an empty array called list
# array list is populated by our add function
# create change_quantity method which allows us to change the quantity of an individual item

# functions include:
# add - will add an item to our array list
# remove - will remove an item to our array list
# check_off - will change purchased variable to true
# basket_contents-returns all items for whom purchased is true
# need_to_purchase-returens all items for which purchased is false
 
 
# Your fabulous code goes here....

class Item
  attr_accessor  :item_name, :quantity
  def initialize(item_name, quantity=1)
    @item_name = item_name
    @quantity = quantity
  end
  def change_quantity(new_quantity)
    @quantity = new_quantity
  end
end

class Grocery_list
  attr_reader :list
  def initialize
    @list = []
  end
  
  def add (*item)
    @list << item
  end
  
  def remove(item_to_remove)
    @list.delete_if{|x| x[0].item_name == item_to_remove}
    puts @list
  end

  def need_to_purchase
    puts "Nothing on the list" if @list.empty?
    @list.select{|item| puts "You need to buy #{item[0].quantity} of #{item[0].item_name}"}
    end

class Controller
  def initialize
   @list = Grocery_list.new
  end
  def control
    status = true
      while status
       puts "What do you want to do (add, remove, list, quit)?"
       instruction = gets.chomp
       #unless instruction == "quit"
        case instruction
          when "add"
            puts "What do you want to add?"
            added_item = gets.chomp
            @list.add(Item.new(added_item))
            puts "You've added #{added_item}"
          when "remove"
            puts "What do you want to remove?"
            removed_item = gets.chomp
            @list.remove(removed_item)
            puts "You've removed #{removed_item} from the list"
          when "list"
            @list.need_to_purchase
          else
            status = false
          end
        end
    end    
        
    
end
  



test = Controller.new
test.control


# DRIVER CODE GOES HERE. 

#broccoli = Item.new("broccoli", 2)
#tofu = Item.new("tofu")
#salsa = Item.new("salsa")

#list1 = Grocery_list.new
#list1.add(broccoli)
#list1.add(tofu)
#list1.add(salsa)

#puts broccoli.purchased

#list1.check_off(broccoli)

#puts broccoli.purchased
#p list1.need_to_purchase
#list1.basket_contents
#
#list1.check_off(salsa)
#p list1.need_to_purchase
#p list1.basket_contents

 
 
 