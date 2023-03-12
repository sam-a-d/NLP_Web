# NLP_Web
This is the implementation of Natural Language Processing machine learning model to the web

# banglasketch web - how to deploy

### + Declare permanat environmental variable (variable name is given after some lines)


### + Install dependencies 

`
pip install -r requirement.txt
`
### Postgress Settings
```
# Login
sudo -u postgres psql

# User creation:
CREATE ROLE nlpweb WITH LOGIN PASSWORD '******';

# Database creation:
CREATE DATABASE nlpweb;

# Assign user to Database:
grant all privileges on database nlpweb to nlpweb;
