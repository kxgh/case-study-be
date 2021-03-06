import * as graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import * as requireGraphQLFile from 'require-graphql-file'

import addTodo from './mutation/add-todo'
import removeTodo from './mutation/remove-todo'
import switchCheck from './mutation/switch-check'
import completeAll from './mutation/complete-all'

import todos from './query/todos'

const schema = buildSchema(requireGraphQLFile('./schema'))

export default graphqlHTTP({
	schema,
	rootValue: {
		todos,
		addTodo,
		removeTodo,
		switchCheck,
		completeAll
	}
})
