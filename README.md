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
            "_id": "63dd6d29ed381c00cd6bfb0f",
            "id_user": 1,
            "message": "Content of the post by user 1",
            "createdAt": "2023-02-03T20:23:05.905Z",
            "updatedAt": "2023-02-03T20:23:05.905Z",
            "__v": 0
        },
    // ...
    ]
}
```

Se puede crear un flit enviando un objeto a la misma ruta. Ahora mismo admite dos parámetros, id_user y message.

Petición:

```
[POST] http://localhost:3000/feed/flits
# Body
{
    "id_user": "1",
    "message": "Content of the post"
}
```

Respuesta:

```
{
    "successMessage": "Fleet creado",
    "flit": {
        "result": {
            "id_user": 1,
            "message": "Content of the post",
            "_id": "63dd766c4e3b03c03d1f1d4d",
            "createdAt": "2023-02-03T21:02:36.666Z",
            "updatedAt": "2023-02-03T21:02:36.666Z",
            "__v": 0
        }
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
            "_id": "63deac6707b750fd76422bb0",
            "name": "Bruno",
            "email": "mip@map.com",
            "password": "1234173628",
            "peopleYouFollow": [],
            "__v": 0,
            "followers": []
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
}
```
Para hacer el login, se puede usar el endpoint `/user/login`. Ahora mismo admite dos parámetros, email y password.

[POST] http://localhost:3000/user/login
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