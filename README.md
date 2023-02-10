Repositorio backend para el proyecto final del bootcamp de Keepcoding

## Flits

Lista de todos los flits: se accede a partir del endpoint `/feed/flits`.

Petición:

```
[GET] http://localhost:3000/feed/flits
```

Respuesta:

```
{
    "successMessage": "Lista de flits obtenida",
    "flits": [
        {
            "_id": "63e00a08dc9db6e04c49c477",
            "id_user": "63dfc759786dde91510a8c7d",
            "message": "Este flit es de Oscar",
            "createdAt": "2023-02-05T19:56:56.983Z",
            "updatedAt": "2023-02-05T19:56:56.983Z",
            "__v": 0
        }
    // ...
    ]
}
```

Se puede crear un flit enviando un objeto a la misma ruta. Ahora mismo admite dos parámetros, id_user (que es una referencia a una id de un usuario) y message.

Petición:

```
[POST] http://localhost:3000/feed/flits
# Body
{
    "id_user": {
        "_id": "63dfc759786dde91510a8c7d"
     },
    "message": "Este flit es de Oscar"
}
```

Respuesta:

```
{
    "successMessage": "Flit creado",
    "flit": {
        "id_user": "63dfc759786dde91510a8c7d",
        "message": "Este flit es de Oscar",
        "_id": "63e00a08dc9db6e04c49c477",
        "createdAt": "2023-02-05T19:56:56.983Z",
        "updatedAt": "2023-02-05T19:56:56.983Z",
        "__v": 0
    },
    "creator": {
        "_id": "63dfc759786dde91510a8c7d",
        "name": "Oscar"
    }
}
```

Ver el detalle de un solo flit: a partir del endpoint `/feed/flits/:flitId"`.

Petición:

```
[GET] http://localhost:3000/feed/flits/63dd6d29ed381c00cd6bfb0f
```

Respuesta:

```
{
    "successMessage": "Flit obtenido.",
    "flit": {
        "_id": "63dd6d29ed381c00cd6bfb0f",
        "id_user": 1,
        "message": "This is a post by user 1",
        "createdAt": "2023-02-03T20:23:05.905Z",
        "updatedAt": "2023-02-03T20:23:05.905Z",
        "__v": 0
    }
}
```

## Usuarios

Lista de todos los usuarios: se accede a partir del endpoint `/users`.

Petición:

```
[GET] http://localhost:3000/users
```

Respuesta:

```
{
    "successMessage": "Lista de usuarios obtenida",
    "users": [
        {
            "_id": "63dfc759786dde91510a8c7d",
            "name": "Oscar",
            "email": "oscar@flitt.com",
            "password": "$2a$10$2rPEjwP1aHgobqB7Qvv2NOAqM.mOTaXvJzCBJMhgoAPjmaSPErEPm",
            "peopleYouFollow": [],
            "followers": [],
            "__v": 2,
            "flits": [
                "63e001a1f34eee2e5a162e12",
                "63e00a08dc9db6e04c49c477"
            ]
        },
    // ...
}
```

Para crear un nuevo usuario, se puede usar el endpoint `/users/signup`. Ahora mismo admite tres parámetros, name, email y password.

Petición:

```
[POST] http://localhost:3000/users/signup
# Body
{
    "name": "Roberta",
    "email": "pari@pé.com",
    "password": "1adgdag63q8ahf",
}
```

Respuesta:

```
{
    "successMessage": "Usuario registrado",
    "user": {
        "name": "Roberta",
        "email": "pari@pé.com",
        "password": "1adgdag63q8ahf",
        "peopleYouFollow": [],
        "followers": [],
        "_id": "63dead2ffd9bb4c0b020b7e4"
    }
     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2M2UyYjU2MDNmY2M4NzRjMTkwNjliZjMiLCJpYXQiOjE2NzU4MDI0NDEsImV4cCI6MTY3NzAxMjA0MX0.Ta-TyzGo5frgtRZUwXnj5nkXFOoorQhTIcRchFK4090"
}
```
<<<<<<< HEAD
=======

Para hacer el login, se puede usar el endpoint `/users/login`. Ahora mismo admite dos parámetros, email y password.

```
[POST] http://localhost:3000/users/login
# Body
{
    "email": "juano1@flitt.com",
    "password": "6789101112"
}

Respuesta
{
    "message": "Login Successfull"
}
```
