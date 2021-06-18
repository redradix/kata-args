const parseCommand = (schema, value) => {
  const flag = value.split('-')[1];
  
  const firstSchemaKey = Object.keys(schema)[0];
  
  if (flag !== firstSchemaKey) throw new Error('Invalid Parameter');
  
  return value ? { [flag]: true } : {}
}

module.exports = { parseCommand }