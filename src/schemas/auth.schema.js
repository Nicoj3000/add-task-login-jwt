import {z} from 'zod'
//Creamos esquema de registro para la validacion de datos
export const registerSchema = z.object({
username: z.string({
    required_error: 'Username is required'
}),
email: z.string({
    required_error:'Email is required'
}).email({
    message:'Invalid email'
}),
password: z.string({
    required_error: 'Password is requires'
}).min(6,{
    message:'Password must be at least 6 charecters'
})
});
//Creamos esquema para login para la validacion de datos
export const loginSchema = z.object({
email: z.string({
    required_error:'Email is required'
}).email({
    message:'Email is not valid'
}),
password: z.string({
    required_error: 'Password is requires'
}).min(6,{
    message:'Password must be at least 6 charecters'
}),
});