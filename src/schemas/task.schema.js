import {z} from 'zod'
//creamos un esquema para las tareas del usuario para que diga que son requeridas
export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }),

    description: z.string({
        required_error: 'Description must be a string'
    }),
    date: z.string().datetime().optional(),

});