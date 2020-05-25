const { loadApiJson } = require("./common/load-api-json");
const {
  templateRequestCode: _templateRequestCode,
} = require("./common/templates/request-code");
const {
  templateRequestTypes: _templateRequestTypes,
} = require("./common/templates/request-types");
const {
  templateTypesBefore: _templateTypesBefore,
} = require("./common/templates/types-before");
const { swaggerV2ToJs } = require("./v2");
const { swaggerV3ToJs } = require("./v3");

async function swaggerToJs(_config = {}) {
  const config = buildConfig(_config);

  validConfig(config);

  const apiJson = await loadApiJson(config);

  return byVersion(apiJson, config);
}

function buildConfig(config = {}) {
  const {
    file = "",
    apiJson = "",
    mode = "prod",
    deprecated = "warning",
    originalBody = false,
    ignoreDescription = false,

    templateCodeBefore,
    templateRequestCode = _templateRequestCode,
    templateCodeAfter,

    templateTypesBefore = _templateTypesBefore,
    templateRequestTypes = _templateRequestTypes,
    templateTypesAfter,
  } = config;

  return {
    file,
    apiJson,
    deprecated,
    mode,
    originalBody,
    ignoreDescription,

    templateCodeBefore,
    templateRequestCode,
    templateCodeAfter,
    templateTypesBefore,
    templateRequestTypes,
    templateTypesAfter,
  };
}

function validConfig(config) {
  const isExistFile = Boolean(config.file);
  const isExistApiJson = Boolean(config.apiJson);

  if (isExistFile === false && isExistApiJson === false) {
    throw new Error(
      "Setup path to file with swagger api or insert content apiJson.",
    );
  }
}

async function byVersion(apiJson, config) {
  if (apiJson.openapi) {
    return await swaggerV3ToJs(apiJson, config);
  } else if (apiJson.swagger) {
    return await swaggerV2ToJs(apiJson, config);
  }

  throw new Error("Swagger version didn't detect");
}

module.exports = { swaggerToJs };
