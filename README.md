# Name: Satoshi Scott Iwako

It is pretty simple to get this app up and running!

1.  Download or clone my repo at `https://github.com/iwakoscott/aachallenge.git`i.e. run `git clone https://github.com/iwakoscott/aachallenge.git` or downloading the repo as a .zip at `https://github.com/iwakoscott/aachallenge/archive/master.zip`.
2.  Navigate to the cloned repo by running `cd` into the repo.
3.  run `npm install` or `yarn install` to download dependencies.
4.  After downloading dependencies, run `npm start` or `yarn start` to run the app on a development server.

<hr />

## Provided Rubric

# **a/A** Challenge 1

_It's great to have you here!_ At AppAcademy we look to find and make brilliant engineers and we think you could do well as an engineer at a/A so we decided to extend a fun challenge over to see how you tackle it.

Grab a cup of your favorite beverage, create a GitHub repo and take your time towards this challenge. Let us know once you have completed the challenge by emailing the repo url to App Academy Devs [dev@appacademy.io](mailto:dev@appacademy.io).

---

#### Before we get started here is a quick brief of how we assess the repo:

### What we look for:

* Well written code and good structure
* Easy to read and well documented code
* Steps to reproduce and run your code
* Well implemented and nice looking UIs
* Proper use of Git (your commit history is important)
* Maybe test cases

### What we **don't** look for:

* Frameworks, Languages, etc. (choose what you are comfortable with but keep it lean)
* A fully working solution (there is little time and too many potential bugs, finishing the challenge isn't the most important aspect)

---

# The Challenge

Real-time collaboration applications are always fun and intuitive, we want to put together a document editing application on the web, in the first version we only need the bare minimum (MVP) to see and edit documents of either text or markdown.

One of our engineers has put together **a backend to support such a system that is readily available to you** with a few limitations which may need to be patched in your code, **you will be taking the role of implementing the Frontend of this product.**

Our product owner has written the following specs:

## Requirements (for V1)

1.  Collect a username from the User when they first land on the site and store it on their browser. ☑️
2.  Get the list of all documents in the database from the backend and show it to all users. ☑️
3.  Allow a user to create their own document. ☑️
4.  Allow a user to edit a document. ☑️

## Nice to haves

#### (none or as many as you have time for, in no special order)

* Format documents with Markdown.
* Connect the application to the real-time backend (websocket) to know when changes are made and documents are created. Have a nice UI to show these.
* Use the `patch` system from the real-time backend to make our application faster and allow real-time collaboration. (See Websocket section below for details)
* Make the UI really nice
* Test your MVP implementation really well

---

# The Backend

## API (RESTful, JSON)

Our backend engineer was too lazy to implement a proper Restful endpoint (perhaps he was resting) so this is what was put together at [https://aachallengeone.now.sh](https://aachallengeone.now.sh):

**GET** /read - Get all available documents in the following format:

**Response**:

    {
      <name>: {
          "owners": [<user>, <user>, ...],
          "lastChangeBy": <user>,
          "content": <content>
      },
      <name>: {
          "owners": [<user>, <user>, ...],
          "lastChangeBy": <user>,
          "content": <content>
      },
      ...
    }

---

**GET** /read/:document - Get a specific document:

**Response**:

    {
      "owners": [<user>, <user>, ...],
      "lastChangeBy": <user>,
      "content": <content>
    }

---

**POST** /update/:document - Update/Create a given document, only supports the two following parameters:

**Body**:

    {
      "issuer": <user>,
      "content": <content>
    }

**Response**:

    {
      "success": true
    }

**GET** /ping - Returns Pong **Response**:

    pong

---

Our Backend developer graciously provided this Postman file with examples for you to try out, although it isn't necessary it may help if you are stuck dealing with the API:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d2012928ca2d7da3710c)

---

## Websocket (Pure Websocket, not based on Socket.io)

Our Websocket implementation is fairly barebones, once you connect to the Websocket endpoint at `wss://aachallengeone.now.sh` all events that happen regarding `creation` and `update` of documents will be broadcasted to all the members connected to the Websocket.

Each event is emitted with a stringified JSON object, there are 3 types of events as represented below with their Schema:

**new** \- Emitted when a new document is created

    {
      type: 'new',
      file: <document_name>,
      issuer: <user>,
      document: {
        "owners": [<user>, <user>, ...],
        "lastChangeBy": <user>,
        "content": <content>
      }
    }

---

**join** \- Emitted when a new user starts editing a document

    {
      type: 'join',
      file: <document_name>,
      issuer: <user>
    }

---

**patch** \- A complex Patch (based on a diff done on the backend) to apply to your document to allow real-time changes:

    {
      type: 'patch',
      file: <document_name>,
      issuer: <user>,
      patch: <patch_object> // See below
    }

---

### Real-time Patches

If you have the time and the patience to go the extra mile and finish your application, the real-time patch that we provide is the way to go. Be warned this part is quite difficult to debug **and although the implementation is correct it will likely cause bugs due to naive setup** so branch out before you commit and push any code.

Our backend engineer sat down and evaluated to find the perfect patching solution for real-time updates (we often pair/whiteboard for this). His solution involves a diff based library known as JSDiff [https://github.com/kpdecker/jsdiff](https://github.com/kpdecker/jsdiff), this library works on both backend and frontend.

On the backend a patch is generated whenever someone hits the `/update` endpoint by calling the `JSDiff#createPatch` method with the current document and the now updated document as provided by the issuer of the update.

Although we recommend using the same library to apply the patch you are free to come up with any solution.

---

# All Done? Or somewhat done?

Send it over (a link to the GitHub repo to [dev@appacademy.io](mailto:dev@appacademy.io)), regardless of completion we would love to take a look at how you have approached the challenge and find your strengths.

---

### Found bugs in our backend?

The backend is backed by test cases but if you've found bugs in this challenge or something that you think should be fixed send it over.
