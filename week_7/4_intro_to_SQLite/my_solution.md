# U3.W7: Intro to SQLite

## Release 0: Create a dummy database

<!-- paste your terminal output here -->
sqlite> CREATE TABLE users (
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   first_name VARCHAR(64) NOT NULL,
   ...>   last_name  VARCHAR(64) NOT NULL,
   ...>   email VARCHAR(128) UNIQUE NOT NULL,
   ...>   created_at DATETIME NOT NULL,
   ...>   updated_at DATETIME NOT NULL
   ...> );

## Release 1: Insert Data 
<!-- paste your terminal output here -->
sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at)
   ...> VALUES ('Kris', 'Shanks', 'shanks@sonic.net', DATETIME('now'), DATETIME('now'));
sqlite> select * from users
   ...> ;
id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-14 20:00:28  2014-05-14 20:00:28
2           Kris        Shanks      shanks@sonic.net       2014-05-14 20:07:02  2014-05-14 20:07:02
sqlite> 

## Release 2: Multi-line commands
<!-- paste your terminal output here -->
sqlite> INSERT into users 
   ...> (first_name, last_name, email, created_at, updated_at)
   ...> VALUES ('kimmey', 'Lin', 'kimmy2@devbootcamp.com', DATETIME('now'), DATETIME('now'));
sqlite> 

## Release 3: Add a column
<!-- paste your terminal output here -->
sqlite> ALTER TABLE users ADD nickname VARCHAR(64) NOT NULL DEFAULT '';
sqlite> select * users
   ...> ;
Error: near "users": syntax error
sqlite> select* from users;
id          first_name  last_name   email                  created_at           updated_at           nickname  
----------  ----------  ----------  ---------------------  -------------------  -------------------  ----------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-14 20:00:28  2014-05-14 20:00:28            
2           Kris        Shanks      shanks@sonic.net       2014-05-14 20:07:02  2014-05-14 20:07:02            
3           kimmey      Lin         kimmy2@devbootcamp.co  2014-05-14 20:17:43  2014-05-14 20:17:43            

sqlite> UPDATE users SET nickname = "KimChee" WHERE id = 1;
sqlite> select * from users;
id          first_name  last_name   email                  created_at           updated_at           nickname  
----------  ----------  ----------  ---------------------  -------------------  -------------------  ----------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-14 20:00:28  2014-05-14 20:00:28  KimChee   
2           Kris        Shanks      shanks@sonic.net       2014-05-14 20:07:02  2014-05-14 20:07:02            
3           kimmey      Lin         kimmy2@devbootcamp.co  2014-05-14 20:17:43  2014-05-14 20:17:43            
sqlite> 

## Release 4: Change a value
<!-- paste your terminal output here -->
sqlite> UPDATE users SET nickname = 'Ninja Coder', first_name = 'Kimmy' WHERE id = 1;
sqlite> UPDATE users SET updated_at = DATETIME('now') WHERE id = 1;
sqlite> select * from users;
id          first_name  last_name   email                  created_at           updated_at           nickname   
----------  ----------  ----------  ---------------------  -------------------  -------------------  -----------
1           Kimmy       Lin         kimmy@devbootcamp.com  2014-05-14 20:00:28  2014-05-14 20:35:59  Ninja Coder
2           Kris        Shanks      shanks@sonic.net       2014-05-14 20:07:02  2014-05-14 20:07:02             
3           kimmey      Lin         kimmy2@devbootcamp.co  2014-05-14 20:17:43  2014-05-14 20:17:43            

## Release 5: Reflect
<!-- Add your reflection here -->