//creamos una validador de esquemas con un try para atrapar el error y evitar que tumbe la app
export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
