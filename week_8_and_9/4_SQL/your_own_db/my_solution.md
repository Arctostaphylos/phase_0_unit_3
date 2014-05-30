<!-- ## Show the terminal output here.  -->
Madrone-2:4_SQL shanks$ sqlite3 my_database.db
-- Loading resources from /Users/shanks/.sqliterc

SQLite version 3.7.13 2012-07-17 17:46:21
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> CREATE TABLE customers (
   ...> id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...> first_name VARCHAR(64) NOT NULL,
   ...> last_name VARCHAR(64) NOT NULL
   ...> );
sqlite> CREATE TABLE paintings (
   ...> id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...> customer_id INTEGER,
   ...> title VARCHAR(64) NOT NULL,
   ...> width INTEGER,
   ...> height INTEGER
   ...> );

sqlite> INSERT INTO customers(first_name, last_name)
   ...> VALUES ('Kris', 'Shanks');
sqlite> SELECT * FROM customers
   ...> ;
id          first_name  last_name 
----------  ----------  ----------
1           Kris        Shanks    
sqlite> INSERT INTO customers (first_name, last_name)
   ...> VALUES ('John', 'Magee'), ('Scott', 'Wilburn'), ('Michael', 'Towne'), ('Brent', 
   ...> 'Calderwell');
sqlite> SELECT * FROM customers
   ...> ;
id          first_name  last_name 
----------  ----------  ----------
1           Kris        Shanks    
2           John        Magee     
3           Scott       Wilburn   
4           Michael     Towne     
5           Brent       Calderwell
sqlite> INSERT INTO customers (first_name, last_name)
   ...> VALUES ('Jason', 'Stern'), ('Nicolai', 'Stern'), ('Scott', 'Shanks')
   ...> , ('Fred', 'Fishman'), ('Brenda', 'Wilson');
sqlite> SELECT * FROM customers
   ...> ;
id          first_name  last_name 
----------  ----------  ----------
1           Kris        Shanks    
2           John        Magee     
3           Scott       Wilburn   
4           Michael     Towne     
5           Brent       Calderwell
6           Jason       Stern     
7           Nicolai     Stern     
8           Scott       Shanks    
9           Fred        Fishman   
10          Brenda      Wilson    
sqlite> 
