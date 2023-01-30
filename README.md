# POC-Games
CRUD de filmes, onde o usuário avalia os filmes e diz se já assistiu ou não;


# Rotas

- POST: '/user'

Para criar um usuário basta mandar um body no formato:

```json
{
  "name": "Seu Lindo Nome"
}
```

- POST: '/film'

Para postar um filme é necessário um body o formato:

```json
{
  "name": "filme", "genre": "genero", "platform":"netflix || hbomax"
}
```

- DELETE: '/deleteFilm/:filmId'

Para deletar um filme é necessário mandar via params o id do filme


