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

- your cloudron url;
- token for cloudron api;

## Running the project

    $ npm start

# How it works
1. Create an user
2. Get uid of the user who was created
3. Create and assign a mailbox to this user by using their uid