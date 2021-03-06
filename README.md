# Romero Bot (Discord)

## Who is romero?

Romero was a "piquetero"; a piquetero is a member of a group that has blocked a street with the purpose of demonstrating and calling attention over a particular issue or demand. The word is a neologism in the Spanish of Argentina, coming from piquete (in English, "picket"), that is, its specific meaning as a standing or walking demonstration of protest in a significant spot. 

Romero is a typical troublemaker, and that is why I made a bot in his honor.

![alt text](https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/OQNMJ35SONFQ3MTT2CT3QTGIPA.jpg)

## How it works:

Romero bot its made in node.js, runs under heroku node dyno: https://romero-bot.herokuapp.com/

## How to:

**Run:**
>$ node .

**Install heroku cli**
>$ curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

**Heroku login:**
>$ heroku login

**Run with heroku:**
>$ heroku local

**Get logs:**
>$ heroku logs --tail -a **romero-bot**

**Create env file (configure DISCO_KEY setting first):**
>$ heroku config:get DISCO_KEY -s -a romero-bot  >> .env

**Get heroku config**
>$ heroku config -a romero-bot

## Screenshot:

![alt text](https://raw.githubusercontent.com/unarix/romero_bot/master/screenshot.png?raw=true)


## Client ID:

To add the bot to your discord server use the client id: `741061506602369115`


