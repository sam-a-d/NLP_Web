# NLP_Web

This is the implementation of Natural Language Processing machine learning model to the web

# banglasketch web - how to deploy

### + Declare permanat environmental variable (variable name is given after some lines)

### + Install dependencies

`pip install -r requirement.txt`

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
```

### NLP Web setting env vars

```

# How to permanently set environmental variables in ubuntu

sudo echo "NLPWEB_DEVELOPMENT_MODE=prod" >> /etc/environment

# restart the terminal and check by the following command 

sudo echo $NLPWEB_DEVELOPMENT_MODE
```

+ in production: NLPWEB_DEVELOPMENT_MODE
+ in local PC:
+ in systemd: NLPWEB_DEVELOPMENT_MODE

### Create socket file

##### Location: /etc/systemd/system/gunicorn-nlpweb.socket

```
[Unit]
Description=gunicorn socket for sa.banglasketch.org
[Socket]
ListenStream=/run/gunicorn-nlp_web.sock
[Install]
WantedBy=sockets.target
```

### Install gunicorn

```
pip install gunicorn
```

### Create service for our app

#### location: /etc/systemd/system/gunicorn-nlpweb.service

```
[Unit]
Description=gunicorn daemon for sa.banglasketch.org
Requires=gunicorn-nlpweb.socket
After=network.target
[Service]
User=samad
Group=samad
WorkingDirectory=/home/samad/websites/django/nlpWeb/NLP_Web
ExecStart=/home/samad/websites/django/nlpWeb/venvNlpweb/bin/gunicorn \
 --access-logfile -\
 --workers 3 \
 --bind unix:/run/gunicorn-nlpweb.sock NLP_web.wsgi:application

Environment="NLPWEB_DEVELOPMENT_MODE=prod"
[Install]
WantedBy=multi-user.target

```

#### Create a nginx configuration file ( location /static/ will be changed later)

```
server {  
	listen 80;   
	server_name sa.banglasketch.org;  
	location = /favicon.ico { access_log off; log_not_found off; }  

	location /static/ {
		root /var/www/djago_files/banglasketch;
		try_files $uri =404;
	}

	location / {     
		include proxy_params;
		proxy_pass http://unix:/run/gunicorn-nlp_web.sock;
	}
}

```

#### Link sites avaialable with sites enabled

```
sudo ln -s /etc/nginx/sites-available/nlp_web /etc/nginx/sites-enabled/nlp_web
```

#### Give proper permission to the django files

```
chown -R www-data:root ~/NLP_web

```

#### Demon reload

```
systemctl daemon-reload
```

#### Enable and start gunicorn and check the status thereafter

```
systemctl start gunicorn-nlpweb.socket
systemctl enable gunicorn-nlpweb.socket

systemctl status gunicorn.socket
```

#### Verify the syntax and restart nginx

```

nginx -t

systemctl restart nginx

```
