import { createServer, Response, belongsTo, hasMany, Model } from 'miragejs';

const startMirageServer = () => {
    createServer({

        models: {
            user: Model.extend({
                todos: hasMany()
            }),
            todo: Model.extend({
                user: belongsTo()
            })
        },

        seeds(server) {
            let user = server.create('user', {
                id: 1,
                email: 'test@test.com',
                password: 'test',
                username: 'test'
            })

            server.create('todo', {
                text: 'Finir la création du serveur Mirage',
                complete: true,
                user
            });
            server.create('todo', {
                text: 'Faire comprendre le système Context aux élèves',
                complete: false,
                user
            });
            server.create('todo', {
                text: 'Aller chercher des oeufs après le boulot',
                complete: false,
                user
            });
            server.create('todo', {
                text: 'Se détendre devant Thrones of Decay au soir',
                complete: false,
                user
            });
            server.create('todo', {
                text: 'Demander à Papa Nurgle de donner un cadeau à JC',
                complete: false,
                user
            });
        },

        routes() {
            this.namespace = 'api'

            this.post('/users/register', (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                return schema.users.create(attrs)
            })

            this.post('/users/login', (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                const user = schema.users.findBy({email: attrs.email});

                if (user) {
                    return {
                        user: user.attrs
                    }
                } else {
                    return new Response(401, {}, {error: 'Login failed'})
                }
            })

            this.get('/users/:id/todos', (schema, request) => {
                const userId = request.params.id;
                const user = schema.users.find(userId);

                return user.todos.models.map(todo => todo.attrs);
            })
        }

    })
}

startMirageServer();
