# { Console } 

Social app where programmers can share code with, and *console* their fellow programmers.

## User Stories

As a user...

- I would like to sign up with email and password.
- I would like to sign in with email and password.
- I would like to be able to change my password.
- I would like to sign out.
- I would like to add a post to my wall.
- I would like to update a post on my wall.
- I would like to delete a post on my wall.
- I would like to see all my posts.
- I would like to allow other users to view my posts.
- I would like to view a list of other users and their feed.


## Links to repositories
[API](https://github.com/console-social-app/console-api)
[Client](https://github.com/console-social-app/console-client)
[Deployed Application](https://console-social-app.github.io/console-client/)
[Deployed API](https://console-social-app.herokuapp.com/)

## Wireframe

![Wireframe](https://imgur.com/TIZIxtF.png)

## Entity Relationship Diagram
![Entity Relationship Diagram part 1](https://i.imgur.com/QsUxTdi.png)
![Entity Relationship Diagram part 2](https://i.imgur.com/OYVSC8C.png)


## Catalog of Routes

### Front End Routes
| entity | route path       | verb   | functionality                                                        |
| ------ | ---------------- | ------ | -------------------------------------------------------------------- |
| user   | /sign-up         | POST   | form to sign up: username, email, password and password confirmation |
| user   | /sign-in         | POST   | let users sign in with email and password                            |
| user   | /sign-out        | DELETE | signs out login users                                                |
| user   | /change-password | PATCH  | allows users to change password                                      |
| post   | /create-post     | POST   | this enable signed in users to make a post                           |
| post   | /posts/:id/edit  | PATCH  | this permits users to edit the posts they own                        |
| post   | /home            | GET    | this is the homepage which list all post and comments                |
| post   | /posts/:id       | GET    | shows and edits a particular post                                    |
| post   | /posts           | GET    | get all posts                                                        |

### Back End (API) Routes
| entity | route path       | verb          | functionality                                                            |
| ------ | ---------------- | ------------- | ------------------------------------------------------------------------ |
| user   | /sign-up         | POST          | sign up api                                                              |
| user   | /sign-in         | POST          | sign in route                                                            |
| user   | /sign-out        | DELETE        | sign out api route                                                       |
| user   | /change-password | PATCH         | change password route                                                    |
| post   | /posts           | GET,POST      | get and post a social media post                                         |
| post   | /posts/:id       | PATCH, DELETE | update, delete post. It also enables adding, updating, deleting comments |

## Technologies Used

- React framework
- Express API framework
- MongoDB
- Mongoose
- Git, GitHub
- Heroku platform
- MongoDB platform
- Bootstrap
- JavaScript, JSX, HTML, CSS
- SaSS
- Node.js
- Axios
- Npm

## Team 

- [Yechan Moon](https://github.com/ans9611)
- [Alex Drogeanu](https://github.com/mindmarine)
- [Adam DeGuire](https://github.com/adamdeguire)
- [Andrew Carter](https://github.com/ahcarter22)

