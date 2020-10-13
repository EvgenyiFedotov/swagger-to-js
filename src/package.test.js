const { execSync } = require("child_process");
const { version, name } = require("../package.json");

afterEach(() => {
  execSync(`rm -rf ${name}-${version}.tgz ${name}-v${version}.tgz TEST_PACK`);
});

describe("npm pack", () => {
  it("should pack all required files", () => {
    execSync("npm pack");
    execSync("mkdir -pv TEST_PACK");
    execSync(`tar -xvzf ${name}-${version}.tgz -C TEST_PACK`);
    const list = execSync("find ./TEST_PACK/package/ -type file")
      .toString()
      .trim()
      .split("\n")
      .map((path) => path.replace("./TEST_PACK/package/", ""))
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    expect(list).toMatchInlineSnapshot(`
      Array [
        "/README.md",
        "/package.json",
        "/request.js",
        "/src/cli/index.js",
        "/src/common/build-base.js",
        "/src/common/build-object-by-mode.js",
        "/src/common/build-object-by-refs.js",
        "/src/common/build-path-name.js",
        "/src/common/build-paths.js",
        "/src/common/get-mode.js",
        "/src/common/is-path-exception.js",
        "/src/common/load-api-json.js",
        "/src/common/path-default-params.js",
        "/src/common/path-parameters-by-in.js",
        "/src/common/templates/request-code.js",
        "/src/common/templates/request-types.js",
        "/src/common/templates/swagger-type.js",
        "/src/common/templates/types-before.js",
        "/src/index.d.ts",
        "/src/index.js",
        "/src/lib/async-for-each.js",
        "/src/lib/async-map.js",
        "/src/lib/async-rebuild-object.js",
        "/src/lib/async-reduce.js",
        "/src/lib/capitalize.js",
        "/src/lib/content-to-json.js",
        "/src/lib/get-ref.js",
        "/src/lib/is-object.js",
        "/src/lib/join-strings.js",
        "/src/lib/json-to-xml.js",
        "/src/lib/presets/index.js",
        "/src/lib/presets/presets.test.js",
        "/src/lib/print-object.js",
        "/src/lib/rebuild-object.js",
        "/src/lib/request.js",
        "/src/lib/xml-to-json.js",
        "/src/v2/index.js",
        "/src/v3/index.js",
      ]
    `);
  });
});

describe("yarn pack", () => {
  it("should pack all required files", () => {
    execSync("yarn pack");
    execSync("mkdir -pv TEST_PACK");
    execSync(`tar -xvzf ${name}-v${version}.tgz -C TEST_PACK`);
    const list = execSync("find ./TEST_PACK/package/ -type file")
      .toString()
      .trim()
      .split("\n")
      .map((path) => path.replace("./TEST_PACK/package/", ""))
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    expect(list).toMatchInlineSnapshot(`
      Array [
        "/.eslintrc",
        "/.github/workflows/nodejs.yml",
        "/.gitignore",
        "/.npmignore",
        "/.prettierrc",
        "/README.md",
        "/examples/api/multi-file-ref-url-v2-yaml/index.js",
        "/examples/api/multi-file-v2-yaml/index.js",
        "/examples/api/simple-v2-json/index.js",
        "/examples/api/simple-v2-yaml/index.js",
        "/examples/api/simple-v3-json/index.js",
        "/examples/api/use-templates/index.js",
        "/examples/cli/use-templates/config.js",
        "/examples/cli/use-templates/index.js",
        "/jest.config.js",
        "/jsconfig.json",
        "/package.json",
        "/request.js",
        "/snapshot-resolver.js",
        "/src/cli/fixtures/apply-preset-from-package.js",
        "/src/cli/fixtures/change-code-and-types-file-name.js",
        "/src/cli/fixtures/change-code-file-name.js",
        "/src/cli/fixtures/change-types-file-name.js",
        "/src/cli/fixtures/disable-request-importing-or-generating.js",
        "/src/cli/fixtures/disable-types-generating.js",
        "/src/cli/fixtures/load-config.js",
        "/src/cli/fixtures/pass-change-case-to-templates.js",
        "/src/cli/fixtures/pass-request-swagger-data-to-templates.js",
        "/src/cli/fixtures/pass-swagger-data-to-templates.js",
        "/src/cli/fixtures/works-with-v2-json.js",
        "/src/cli/fixtures/works-with-v2-yaml.js",
        "/src/cli/fixtures/works-with-v3-json.js",
        "/src/cli/fixtures/works-with-v3-yaml.js",
        "/src/cli/index.js",
        "/src/cli/index.snap.js",
        "/src/cli/index.test.js",
        "/src/common/build-base.js",
        "/src/common/build-object-by-mode.js",
        "/src/common/build-object-by-refs.js",
        "/src/common/build-path-name.js",
        "/src/common/build-paths.js",
        "/src/common/get-mode.js",
        "/src/common/is-path-exception.js",
        "/src/common/load-api-json.js",
        "/src/common/path-default-params.js",
        "/src/common/path-parameters-by-in.js",
        "/src/common/templates/request-code.js",
        "/src/common/templates/request-types.js",
        "/src/common/templates/swagger-type.js",
        "/src/common/templates/types-before.js",
        "/src/index.d.ts",
        "/src/index.js",
        "/src/lib/async-for-each.js",
        "/src/lib/async-map.js",
        "/src/lib/async-rebuild-object.js",
        "/src/lib/async-reduce.js",
        "/src/lib/capitalize.js",
        "/src/lib/content-to-json.js",
        "/src/lib/get-ref.js",
        "/src/lib/is-object.js",
        "/src/lib/join-strings.js",
        "/src/lib/json-to-xml.js",
        "/src/lib/presets/index.js",
        "/src/lib/presets/mocks/demo-preset/another.js",
        "/src/lib/presets/mocks/demo-preset/index.js",
        "/src/lib/presets/mocks/demo-preset/package.json",
        "/src/lib/presets/mocks/demo2-preset/index.js",
        "/src/lib/presets/mocks/demo2-preset/local.js",
        "/src/lib/presets/mocks/demo2-preset/package.json",
        "/src/lib/presets/mocks/demo3-preset/index.js",
        "/src/lib/presets/mocks/demo3-preset/package.json",
        "/src/lib/presets/mocks/demo3-preset/unused.js",
        "/src/lib/presets/mocks/demo3-preset/yarn.lock",
        "/src/lib/presets/mocks/preset-nested.js",
        "/src/lib/presets/mocks/preset-options-nested.js",
        "/src/lib/presets/mocks/preset-options.js",
        "/src/lib/presets/mocks/preset-second.js",
        "/src/lib/presets/mocks/preset-simple.js",
        "/src/lib/presets/presets.test.js",
        "/src/lib/print-object.js",
        "/src/lib/rebuild-object.js",
        "/src/lib/request.js",
        "/src/lib/xml-to-json.js",
        "/src/mocks/petstore-v2-multi-file.yaml",
        "/src/mocks/petstore-v2-multi-file/definitions.yaml",
        "/src/mocks/petstore-v2-multi-file/paths.yaml",
        "/src/mocks/petstore-v2-ref-url.yaml",
        "/src/mocks/petstore-v2.json",
        "/src/mocks/petstore-v2.yaml",
        "/src/mocks/petstore-v3-short.json",
        "/src/mocks/petstore-v3.json",
        "/src/mocks/petstore-v3.yaml",
        "/src/package.test.js",
        "/src/v2/extended.test.js",
        "/src/v2/fixtures/ignore-deprecated.js",
        "/src/v2/fixtures/ignore-description.js",
        "/src/v2/fixtures/import-request-on-disabled.js",
        "/src/v2/fixtures/import-request-on-false.js",
        "/src/v2/fixtures/import-request-on-true.js",
        "/src/v2/fixtures/insert-original-body.js",
        "/src/v2/fixtures/throw-exception-on-deprecated.js",
        "/src/v2/fixtures/work-with-api-in-config.js",
        "/src/v2/fixtures/work-without-config.js",
        "/src/v2/fixtures/works-with-preset.js",
        "/src/v2/index.js",
        "/src/v2/index.snap.js",
        "/src/v2/index.test.js",
        "/src/v2/mocks/example-preset.js",
        "/src/v3/fixtures/add-original-body.js",
        "/src/v3/fixtures/ignore-deprecated.js",
        "/src/v3/fixtures/ignore-description.js",
        "/src/v3/fixtures/import-request-on-disabled.js",
        "/src/v3/fixtures/import-request-on-false.js",
        "/src/v3/fixtures/import-request-on-true.js",
        "/src/v3/fixtures/throw-exception-on-deprecated.js",
        "/src/v3/fixtures/works-with-preset.js",
        "/src/v3/fixtures/works-without-config.js",
        "/src/v3/index.js",
        "/src/v3/index.snap.js",
        "/src/v3/index.test.js",
        "/src/v3/mocks/example-preset.js",
        "/yarn.lock",
      ]
    `);
  });
});
