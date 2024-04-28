# Application with a frontend (nextjs) and backend (Fiber Golang).
- Backend: Implementation of a RESTful API using Fiber with PostgreSQL, Redis, and JWT authentication (Cert RS256).
- Frontend: Next.js v14 (TypeScript).
- Language Localization (English, Ukrainian, Russian).
- Controlled and convenient adding, changing and deleting language translations.
- Controlled and convenient creation of migrations.

---

## Do it

- Change or copy the **.env.example** file to **.env**.
- Change all values ​​in the **.env** file that start with **"your"** to your values.
- In order to avoid errors when starting the application, you need to clear the environment variables.
 Run command (for Linux/MacOS): ``unset POSTGRES_USER POSTGRES_PASSWORD POSTGRES_DB POSTGRES_PORT PGDATA POSTGRES_SSL_MODE``.
 The equivalent of the `unset` command for Windows on the command line (cmd) is `set`:

```cmd
set POSTGRES_USER=
set POSTGRES_PASSWORD=
set POSTGRES_DB=
set POSTGRES_PORT=
set PGDATA=
set POSTGRES_SSL_MODE=
```

And in PowerShell this will be the command `Remove-Item`:

```powershell
Remove-Item Env:POSTGRES_USER
Remove-Item Env:POSTGRES_PASSWORD
Remove-Item Env:POSTGRES_DB
Remove-Item Env:POSTGRES_PORT
Remove-Item Env:PGDATA
Remove-Item Env:POSTGRES_SSL_MODE
```

Note that these commands remove environment variables for the current session only. If you want to remove environment variables permanently, you will need to change your system settings.

## Required Tools

- Locale go-i18n: [https://github.com/nicksnyder/go-i18n](https://github.com/nicksnyder/go-i18n)
- Migrate: [https://github.com/golang-migrate/migrate](https://github.com/golang-migrate/migrate)


### Start

- Clone the repository: ``git clone https://github.com/anrysys/frontend-and-backend-nextjs-and-golang-fiber.git``
- Go to the **/frontend-and-backend-nextjs-and-golang-fiber** - root directory.
- In the root directory run the following commands: ``docker compose up -d`` and then run migrations to create the required tables in the database: ``make migrate.up``
- Go to the **/backend** directory and run the command: ``air``
- Go to the **/frontend** directory and run the command: ``npm install --save next``
- Go to the **/frontend** directory and run the command: ``npm run dev``

If you want to work with the API through Postman, then import the API_Your_project.postman_collection.json file, which is located in the root. This file contains all the key endpoints.


---

!!! Be sure to change this in the file .env (change to your certificate - https://it-tools.tech/rsa-key-pair-generator):
ACCESS_TOKEN_PRIVATE_KEY=LS0tL...f0tLS0=
ACCESS_TOKEN_PUBLIC_KEY=LS0tLS...S0tLQ==

!!! Be sure to change this in the file .env (change to your certificate - https://it-tools.tech/rsa-key-pair-generator):
REFRESH_TOKEN_PRIVATE_KEY=LS0tLS1CRUdJTiBSU0EgU...VZLS0tLS0=
REFRESH_TOKEN_PUBLIC_KEY=LS0tLS1CRUdJTiBQVUJMSU.....LS0tLQ==

---

### Coming soon

All commands can be executed via Makefile:

make command.action -arg(-s)...
