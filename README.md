### DURAN Adem
# Start project

```bash
  # Install dependencies
  npm install
  # Mount container
  docker-compose up -d
  # Run project
  npm run dev
```


# Dev line code
```bash
  # Create module with service ....
  nest generate resource post
  # Install TypeORM
  npm i @nestjs/typeorm pg typeorm
  # Install config
  npm i @nestjs/config
```


# TODO

- [ ] Create entity User
- [ ] CRUD into userService

```
UserEntity
  - id
  - username
  - email
```