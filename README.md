# DareDrop Challenge - Dare2Stream

Real-time streamers voting application.
Each user has one vote per streamer. This authentication has been implemented using local storage with generated id set when opening the home page. Users can add their favorite streamer.
Socket.IO has been used to display real-time data like voting or adding the new streamer. When clicking on the streamer’s name on the list, their page will be open.

## Techstack

- SQLite
- Express
- Socket.IO
- React
- Node

## Instructions

### Client run

1. Go to the _client_ folder
2. Use `npm run dev` command.
3. Client runs on `localhost:5173`

### Backend run

1. Go to the _api_ folder
2. Use `npm run start` command.
3. Backend server runs on `localhost:8080`

## Endpoints

- newStreamer (POST) creates new streamer in the database

  - URL: _/api/v1/streamers_
  - data model `{"name": string, "description": string, "platform": string}`

- allStreamers (GET) gets all streamers from database:

  - URL: _/api/v1/streamers_

- specificStreamer (GET) gets streamer by id:

  - URL: _/api/v1/streamers/:streamerId_

- newVote (PUT) creates new vote for streamer using userId, streamerId and voteType (downvote, upvote), returns the sum of his votes:

  - URL: _/api/v1/streamers/:streamerId/vote_
  - data model `{"userId": string, "voteType": string}`

- deleteVote (DELETE) deletes user vote for streamer

  - URL: _/api/v1/streamers/:streamerId/vote/:userId_
    /votes/:userId

- userVotes (GET) returns user votes
  - URL: _/api/v1/votes/:userId_
