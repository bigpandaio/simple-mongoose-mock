module.exports = (modelName, stubbedMethods) => {
  return modelGen(modelName, stubbedMethods);
};

function modelGen(stubbedModelName, stubbedMethods) {
  return defaultMethods.reduce((modelObj, method) =>
    stubbedMethods[method] ?
    Object.assign(modelObj, { [method]: stubbedMethods[method] }) :
    Object.assign(modelObj, { [method]: () => modelObj }), {});
}

const defaultMethods = [
  'aggregate',
  'count',
  'create',
  'distinct',
  'ensureIndexes',
  'find',
  'findById',
  'findByIdAndRemove',
  'findByIdAndUpdate',
  'findOne',
  'findOneAndRemove',
  'findOneAndUpdate',
  'geoNear',
  'geoSearch',
  'index',
  'mapReduce',
  'lean',
  'exec',
  'plugin',
  'in',
  'populate',
  'remove',
  'set',
  'update',
  'where',
  'toObject',
  'toString',
  'updateMany',
  'select',
  'add',
  'sort'
];
