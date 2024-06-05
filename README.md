## Server Part of the Automaze Application

This part of the application is responsible for handling requests from the client side and interacting with the database.

### Used Technologies

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Prisma ORM**: A modern ORM for TypeScript and JavaScript, providing convenient access to the database.
- **PostgreSQL**: An object-relational database for storing information.

### Endpoints

#### Todos

- **GET /todos**: Get a list of all todos.
- **POST /todos**: Create a new todo.
- **PATCH /todos/:id**: Partially update an existing todo by its identifier.
- **DELETE /todos/:id**: Delete a todo by its identifier.

### Running the Server

1. Open the terminal.
2. Navigate to the directory where the server-side code is located.
3. Run the command `npm install` to install all necessary dependencies.
5. To do migrations for the database, use the command `npx prisma migrate dev --name init`.
6. Open another terminal and run the command `npm start:dev` to start the server.
7. After a successful startup, the server will be available at [http://localhost:5000/](http://localhost:5000/).
