function pathParametersByIn(pathParams, state) {
  const { pathConfig } = pathParams;
  const { parameters = [] } = pathConfig;
  const defaultValue = {
    type: "object",
    properties: {},
  };
  const paramsByIn = parameters.reduce((memo, parameter) => {
    if (!memo.properties[parameter.in]) {
      memo.properties[parameter.in] = {};
    }

    memo.properties[parameter.in][parameter.name] = parameter;

    return memo;
  }, defaultValue);

  // Rrequired
  const required = getRequired(paramsByIn);

  if (required.length) {
    paramsByIn.required = required;
  }

  if (state.config.originalBody === false) {
    // Check exist 'formData' if exist move tot 'body'
    if (paramsByIn.properties.formData) {
      paramsByIn.properties.body = paramsByIn.properties.formData;
      delete paramsByIn.properties.formData;
    }

    // Check body, if have one element so push up to root body
    if (paramsByIn.properties.body) {
      const bodyKeys = Object.keys(paramsByIn.properties.body);

      if (bodyKeys.length === 1) {
        paramsByIn.properties.body = paramsByIn.properties.body[bodyKeys[0]];
      }
    }
  }

  return paramsByIn;
}

function getRequired({ properties }) {
  return Object.keys(properties).reduce((result, propName) => {
    const propValue = properties[propName];
    const isRequired = Object.keys(propValue).reduce((memo, parameterKey) => {
      const parameter = propValue[parameterKey];

      return memo || Boolean(parameter.required);
    }, false);

    if (isRequired) {
      result.push(propName);
    }

    return result;
  }, []);
}

module.exports = { pathParametersByIn };
