# cloudron-api-create-user
Backend with nodeJS and Express to create user by using Cloudron API.

## Requirements
For development, you will only need Node.js and npm.

## Install

    $ git clone https://github.com/MarcouxDesBois/cloudron-api-create-user
    $ cd cloudron-api-create-user
    $ npm install

## Configure app

Create `.env` then edit it with your settings. You will need:

````dotenv
TOKEN_API=your token

CLOUDRON_URL=url of your server
USERS_API=/users
GROUPS_API=/groups
INVITE_EMAIL_API=/send_invite_email
EMAIL_API=api for your mail service
````

## Running the project

    $ npm start

# How it works
1. Create an user
2. Get uid of the user who was created
3. Create and assign a mailbox to this user by using their uid