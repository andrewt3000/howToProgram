# Relational Database Basics

Relational databases store data in tables. (similar to excel sheets)  
Relational database tables have fields. (similar to excel columns)  
Data is stored in rows (similar to excel rows)  

Most relational databases support standard sql but may also use vendor supported extensions.  
Some examples of relational databases include:  
1. Microsoft SQL Server
2. Oracle
3. Postgress

## Sql statements
1. [select](https://www.w3schools.com/sql/sql_select.asp) statement gets data
2. [insert](https://www.w3schools.com/sql/sql_insert.asp) inserts records
3. [update](https://www.w3schools.com/sql/sql_update.asp) updates records
4. [delete](https://www.w3schools.com/sql/sql_delete.asp) deletes records

## Normalization
Database [normalization](https://en.wikipedia.org/wiki/Database_normalization) is a best practice. It prevents the duplication of data.   

1. All tables should have a [primary key](https://en.wikipedia.org/wiki/Primary_key) that is immutable.  
2. All tables that reference another table should have a foreign key. This maintains [referential integrity](https://en.wikipedia.org/wiki/Referential_integrity). It also allows data to updated in one place and it's updated for all the references.  
