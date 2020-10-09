const { swaggerToJs } = require("../index");

const baseConfig = {
  file: "./src/mocks/petstore-v3.json",
};

test("without config", async () => {
  const { code, types } = await swaggerToJs(baseConfig);

  expect({ code, types }).toMatchInlineSnapshot(`
    Object {
      "code": "export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`)(params);
    }

    export function findPetsByTags(params) {
      return request(\\"get\\", \`/pet/findByTags\`)(params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`)(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    ",
      "types": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Update an existing pet
    * Update an existing pet by Id
    */
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

    type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

    type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Add a new pet to the store
    * Add a new pet to the store
    */
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

    type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

    type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by status
    * Multiple status values can be provided with comma separated strings
    */
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by tags
    * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
    */
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Find pet by ID
    * Returns a single pet
    */
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    /**
    * Updates a pet in the store with form data
    */
    export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetResult0 = RequestResult<null>;
    /**
    * Deletes a pet
    */
    export function deletePet(params: DeletePetParams0): DeletePetResult0;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
    type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
    /**
    * uploads an image
    */
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    /**
    * Returns pet inventories by status
    * Returns a map of status codes to quantities
    */
    export function getInventory(): GetInventoryResult0;

    type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    /**
    * Place an order for a pet
    * Place a new order in the store
    */
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
    type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
    /**
    * Find purchase order by ID
    * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
    */
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    /**
    * Delete purchase order by ID
    * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
    */
    export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

    type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    /**
    * Create user
    * This can only be done by the logged in user.
    */
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type CreateUserResult2 = RequestResult<null>;
    export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

    type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Creates list of users with given input array
    * Creates list of users with given input array
    */
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    /**
    * Logs user into the system
    */
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserResult0 = RequestResult<null>;
    /**
    * Logs out current logged in user session
    */
    export function logoutUser(): LogoutUserResult0;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Get user by user name
    */
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    /**
    * Update user
    * This can only be done by the logged in user.
    */
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type UpdateUserResult2 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserResult0 = RequestResult<null>;
    /**
    * Delete user
    * This can only be done by the logged in user.
    */
    export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

    ",
    }
  `);
});

test("deprecated=ignore", async () => {
  const { code, types } = await swaggerToJs({
    ...baseConfig,
    deprecated: "ignore",
  });

  expect({ code, types }).toMatchInlineSnapshot(`
    Object {
      "code": "export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`)(params);
    }

    export function findPetsByTags(params) {
      return request(\\"get\\", \`/pet/findByTags\`)(params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`)(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    ",
      "types": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Update an existing pet
    * Update an existing pet by Id
    */
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

    type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

    type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Add a new pet to the store
    * Add a new pet to the store
    */
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

    type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

    type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by status
    * Multiple status values can be provided with comma separated strings
    */
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by tags
    * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
    */
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Find pet by ID
    * Returns a single pet
    */
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    /**
    * Updates a pet in the store with form data
    */
    export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetResult0 = RequestResult<null>;
    /**
    * Deletes a pet
    */
    export function deletePet(params: DeletePetParams0): DeletePetResult0;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
    type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
    /**
    * uploads an image
    */
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    /**
    * Returns pet inventories by status
    * Returns a map of status codes to quantities
    */
    export function getInventory(): GetInventoryResult0;

    type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    /**
    * Place an order for a pet
    * Place a new order in the store
    */
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
    type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
    /**
    * Find purchase order by ID
    * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
    */
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    /**
    * Delete purchase order by ID
    * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
    */
    export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

    type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    /**
    * Create user
    * This can only be done by the logged in user.
    */
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type CreateUserResult2 = RequestResult<null>;
    export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

    type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Creates list of users with given input array
    * Creates list of users with given input array
    */
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    /**
    * Logs user into the system
    */
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserResult0 = RequestResult<null>;
    /**
    * Logs out current logged in user session
    */
    export function logoutUser(): LogoutUserResult0;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Get user by user name
    */
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    /**
    * Update user
    * This can only be done by the logged in user.
    */
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type UpdateUserResult2 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserResult0 = RequestResult<null>;
    /**
    * Delete user
    * This can only be done by the logged in user.
    */
    export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

    ",
    }
  `);
});

test("deprecated=exception", async () => {
  const { code, types } = await swaggerToJs({
    ...baseConfig,
    deprecated: "exception",
  });

  expect({ code, types }).toMatchInlineSnapshot(`
    Object {
      "code": "export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`)(params);
    }

    export function findPetsByTags(params) {
      return request(\\"get\\", \`/pet/findByTags\`)(params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`)(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    ",
      "types": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Update an existing pet
    * Update an existing pet by Id
    */
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

    type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

    type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Add a new pet to the store
    * Add a new pet to the store
    */
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

    type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

    type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by status
    * Multiple status values can be provided with comma separated strings
    */
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by tags
    * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
    */
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Find pet by ID
    * Returns a single pet
    */
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    /**
    * Updates a pet in the store with form data
    */
    export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetResult0 = RequestResult<null>;
    /**
    * Deletes a pet
    */
    export function deletePet(params: DeletePetParams0): DeletePetResult0;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
    type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
    /**
    * uploads an image
    */
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    /**
    * Returns pet inventories by status
    * Returns a map of status codes to quantities
    */
    export function getInventory(): GetInventoryResult0;

    type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    /**
    * Place an order for a pet
    * Place a new order in the store
    */
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
    type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
    /**
    * Find purchase order by ID
    * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
    */
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    /**
    * Delete purchase order by ID
    * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
    */
    export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

    type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    /**
    * Create user
    * This can only be done by the logged in user.
    */
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type CreateUserResult2 = RequestResult<null>;
    export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

    type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Creates list of users with given input array
    * Creates list of users with given input array
    */
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    /**
    * Logs user into the system
    */
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserResult0 = RequestResult<null>;
    /**
    * Logs out current logged in user session
    */
    export function logoutUser(): LogoutUserResult0;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Get user by user name
    */
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    /**
    * Update user
    * This can only be done by the logged in user.
    */
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type UpdateUserResult2 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserResult0 = RequestResult<null>;
    /**
    * Delete user
    * This can only be done by the logged in user.
    */
    export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

    ",
    }
  `);
});

test("importRequest=true", async () => {
  const { code, types } = await swaggerToJs({
    ...baseConfig,
    importRequest: true,
  });

  expect({ code, types }).toMatchInlineSnapshot(`
    Object {
      "code": "export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`)(params);
    }

    export function findPetsByTags(params) {
      return request(\\"get\\", \`/pet/findByTags\`)(params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`)(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    ",
      "types": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Update an existing pet
    * Update an existing pet by Id
    */
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

    type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

    type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Add a new pet to the store
    * Add a new pet to the store
    */
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

    type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

    type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by status
    * Multiple status values can be provided with comma separated strings
    */
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by tags
    * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
    */
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Find pet by ID
    * Returns a single pet
    */
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    /**
    * Updates a pet in the store with form data
    */
    export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetResult0 = RequestResult<null>;
    /**
    * Deletes a pet
    */
    export function deletePet(params: DeletePetParams0): DeletePetResult0;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
    type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
    /**
    * uploads an image
    */
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    /**
    * Returns pet inventories by status
    * Returns a map of status codes to quantities
    */
    export function getInventory(): GetInventoryResult0;

    type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    /**
    * Place an order for a pet
    * Place a new order in the store
    */
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
    type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
    /**
    * Find purchase order by ID
    * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
    */
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    /**
    * Delete purchase order by ID
    * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
    */
    export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

    type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    /**
    * Create user
    * This can only be done by the logged in user.
    */
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type CreateUserResult2 = RequestResult<null>;
    export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

    type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Creates list of users with given input array
    * Creates list of users with given input array
    */
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    /**
    * Logs user into the system
    */
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserResult0 = RequestResult<null>;
    /**
    * Logs out current logged in user session
    */
    export function logoutUser(): LogoutUserResult0;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Get user by user name
    */
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    /**
    * Update user
    * This can only be done by the logged in user.
    */
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type UpdateUserResult2 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserResult0 = RequestResult<null>;
    /**
    * Delete user
    * This can only be done by the logged in user.
    */
    export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

    ",
    }
  `);
});

test("originalBody=true", async () => {
  const { code, types } = await swaggerToJs({
    ...baseConfig,
    originalBody: true,
  });

  expect({ code, types }).toMatchInlineSnapshot(`
    Object {
      "code": "export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`)(params);
    }

    export function findPetsByTags(params) {
      return request(\\"get\\", \`/pet/findByTags\`)(params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`)(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    ",
      "types": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UpdatePetParams0 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Update an existing pet
    * Update an existing pet by Id
    */
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\"?: { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\"?: { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type UpdatePetParams4 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

    type UpdatePetParams5 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

    type AddPetParams0 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Add a new pet to the store
    * Add a new pet to the store
    */
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\"?: { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
    type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\"?: { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; }; };
    type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type AddPetParams4 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

    type AddPetParams5 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

    type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by status
    * Multiple status values can be provided with comma separated strings
    */
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    /**
    * Finds Pets by tags
    * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
    */
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    /**
    * Find pet by ID
    * Returns a single pet
    */
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    /**
    * Updates a pet in the store with form data
    */
    export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetResult0 = RequestResult<null>;
    /**
    * Deletes a pet
    */
    export function deletePet(params: DeletePetParams0): DeletePetResult0;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: { \\"body\\"?: string; }; };
    type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
    /**
    * uploads an image
    */
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    /**
    * Returns pet inventories by status
    * Returns a map of status codes to quantities
    */
    export function getInventory(): GetInventoryResult0;

    type PlaceOrderParams0 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
    type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    /**
    * Place an order for a pet
    * Place a new order in the store
    */
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\"?: { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; }; };
    type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type PlaceOrderParams2 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
    type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
    /**
    * Find purchase order by ID
    * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
    */
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    /**
    * Delete purchase order by ID
    * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
    */
    export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

    type CreateUserParams0 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    /**
    * Create user
    * This can only be done by the logged in user.
    */
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\"?: { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; }; };
    type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    type CreateUserParams2 = { \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type CreateUserResult2 = RequestResult<null>;
    export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

    type CreateUsersWithListInputParams0 = { \\"body\\"?: { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; }; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Creates list of users with given input array
    * Creates list of users with given input array
    */
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\"?: { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; }; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    /**
    * Logs user into the system
    */
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserResult0 = RequestResult<null>;
    /**
    * Logs out current logged in user session
    */
    export function logoutUser(): LogoutUserResult0;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    /**
    * Get user by user name
    */
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    /**
    * Update user
    * This can only be done by the logged in user.
    */
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; }; };
    type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type UpdateUserResult2 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserResult0 = RequestResult<null>;
    /**
    * Delete user
    * This can only be done by the logged in user.
    */
    export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

    ",
    }
  `);
});

test("ignoreDescription=true", async () => {
  const { code, types } = await swaggerToJs({
    ...baseConfig,
    ignoreDescription: true,
  });

  expect({ code, types }).toMatchInlineSnapshot(`
    Object {
      "code": "export function updatePet(params) {
      return request(\\"put\\", \`/pet\`)(params);
    }

    export function addPet(params) {
      return request(\\"post\\", \`/pet\`)(params);
    }

    export function findPetsByStatus(params) {
      return request(\\"get\\", \`/pet/findByStatus\`)(params);
    }

    export function findPetsByTags(params) {
      return request(\\"get\\", \`/pet/findByTags\`)(params);
    }

    export function getPetById(params) {
      return request(\\"get\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function updatePetWithForm(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function deletePet(params) {
      return request(\\"delete\\", \`/pet/\${params.path.petId}\`)(params);
    }

    export function uploadFile(params) {
      return request(\\"post\\", \`/pet/\${params.path.petId}/uploadImage\`, { \\"header\\": { \\"accept\\": \\"application/octet-stream\\", \\"Content-Type\\": \\"application/json\\", }, })(params);
    }

    export function getInventory() {
      return request(\\"get\\", \`/store/inventory\`, { \\"header\\": { \\"Content-Type\\": \\"application/json\\", }, })();
    }

    export function placeOrder(params) {
      return request(\\"post\\", \`/store/order\`)(params);
    }

    export function getOrderById(params) {
      return request(\\"get\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function deleteOrder(params) {
      return request(\\"delete\\", \`/store/order/\${params.path.orderId}\`)(params);
    }

    export function createUser(params) {
      return request(\\"post\\", \`/user\`)(params);
    }

    export function createUsersWithListInput(params) {
      return request(\\"post\\", \`/user/createWithList\`)(params);
    }

    export function loginUser(params) {
      return request(\\"get\\", \`/user/login\`)(params);
    }

    export function logoutUser() {
      return request(\\"get\\", \`/user/logout\`)();
    }

    export function getUserByName(params) {
      return request(\\"get\\", \`/user/\${params.path.username}\`)(params);
    }

    export function updateUser(params) {
      return request(\\"put\\", \`/user/\${params.path.username}\`)(params);
    }

    export function deleteUser(params) {
      return request(\\"delete\\", \`/user/\${params.path.username}\`)(params);
    }

    ",
      "types": "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

    type UpdatePetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams0 & UpdatePetAddedParams0): UpdatePetResult0;

    type UpdatePetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams1 & UpdatePetAddedParams1): UpdatePetResult1;

    type UpdatePetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams2 & UpdatePetAddedParams2): UpdatePetResult2;

    type UpdatePetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type UpdatePetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams3 & UpdatePetAddedParams3): UpdatePetResult3;

    type UpdatePetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type UpdatePetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function updatePet(params: UpdatePetParams4 & UpdatePetAddedParams4): UpdatePetResult4;

    type UpdatePetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type UpdatePetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type UpdatePetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function updatePet(params: UpdatePetParams5 & UpdatePetAddedParams5): UpdatePetResult5;

    type AddPetParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams0 & AddPetAddedParams0): AddPetResult0;

    type AddPetParams1 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams1 & AddPetAddedParams1): AddPetResult1;

    type AddPetParams2 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult2 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams2 & AddPetAddedParams2): AddPetResult2;

    type AddPetParams3 = { \\"body\\"?: { \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }; };
    type AddPetAddedParams3 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult3 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams3 & AddPetAddedParams3): AddPetResult3;

    type AddPetParams4 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams4 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type AddPetResult4 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function addPet(params: AddPetParams4 & AddPetAddedParams4): AddPetResult4;

    type AddPetParams5 = { \\"body\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type AddPetAddedParams5 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type AddPetResult5 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function addPet(params: AddPetParams5 & AddPetAddedParams5): AddPetResult5;

    type FindPetsByStatusParams0 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByStatusResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByStatus(params: FindPetsByStatusParams0 & FindPetsByStatusAddedParams0): FindPetsByStatusResult0;

    type FindPetsByStatusParams1 = { \\"query\\"?: { \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; };
    type FindPetsByStatusAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByStatusResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByStatus(params: FindPetsByStatusParams1 & FindPetsByStatusAddedParams1): FindPetsByStatusResult1;

    type FindPetsByTagsParams0 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type FindPetsByTagsResult0 = RequestResult<{ \\"pet\\"?: ({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]; }>;
    export function findPetsByTags(params: FindPetsByTagsParams0 & FindPetsByTagsAddedParams0): FindPetsByTagsResult0;

    type FindPetsByTagsParams1 = { \\"query\\"?: { \\"tags\\"?: (string)[]; }; };
    type FindPetsByTagsAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type FindPetsByTagsResult1 = RequestResult<({ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; })[]>;
    export function findPetsByTags(params: FindPetsByTagsParams1 & FindPetsByTagsAddedParams1): FindPetsByTagsResult1;

    type GetPetByIdParams0 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetPetByIdResult0 = RequestResult<{ \\"pet\\"?: { \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": { \\"photoUrl\\"?: (string)[]; }; \\"tags\\"?: { \\"tag\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; }; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }; }>;
    export function getPetById(params: GetPetByIdParams0 & GetPetByIdAddedParams0): GetPetByIdResult0;

    type GetPetByIdParams1 = { \\"path\\": { \\"petId\\": number; }; };
    type GetPetByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetPetByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"name\\": string; \\"category\\"?: { \\"id\\"?: number; \\"name\\"?: string; }; \\"photoUrls\\": (string)[]; \\"tags\\"?: ({ \\"id\\"?: number; \\"name\\"?: string; })[]; \\"status\\"?: \\"available\\" | \\"pending\\" | \\"sold\\"; }>;
    export function getPetById(params: GetPetByIdParams1 & GetPetByIdAddedParams1): GetPetByIdResult1;

    type UpdatePetWithFormParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"name\\"?: string; \\"status\\"?: string; }; };
    type UpdatePetWithFormResult0 = RequestResult<null>;
    export function updatePetWithForm(params: UpdatePetWithFormParams0): UpdatePetWithFormResult0;

    type DeletePetParams0 = { \\"header\\"?: { \\"api_key\\"?: string; }; \\"path\\": { \\"petId\\": number; }; };
    type DeletePetResult0 = RequestResult<null>;
    export function deletePet(params: DeletePetParams0): DeletePetResult0;

    type UploadFileParams0 = { \\"path\\": { \\"petId\\": number; }; \\"query\\"?: { \\"additionalMetadata\\"?: string; }; \\"body\\"?: string; };
    type UploadFileResult0 = RequestResult<{ \\"code\\"?: number; \\"type\\"?: string; \\"message\\"?: string; }>;
    export function uploadFile(params: UploadFileParams0): UploadFileResult0;

    type GetInventoryResult0 = RequestResult<{ [nameProp: string]: number; }>;
    export function getInventory(): GetInventoryResult0;

    type PlaceOrderParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult0 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams0 & PlaceOrderAddedParams0): PlaceOrderResult0;

    type PlaceOrderParams1 = { \\"body\\"?: { \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }; };
    type PlaceOrderAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams1 & PlaceOrderAddedParams1): PlaceOrderResult1;

    type PlaceOrderParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; };
    type PlaceOrderAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type PlaceOrderResult2 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function placeOrder(params: PlaceOrderParams2 & PlaceOrderAddedParams2): PlaceOrderResult2;

    type GetOrderByIdParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetOrderByIdResult0 = RequestResult<{ \\"order\\"?: { \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }; }>;
    export function getOrderById(params: GetOrderByIdParams0 & GetOrderByIdAddedParams0): GetOrderByIdResult0;

    type GetOrderByIdParams1 = { \\"path\\": { \\"orderId\\": number; }; };
    type GetOrderByIdAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetOrderByIdResult1 = RequestResult<{ \\"id\\"?: number; \\"petId\\"?: number; \\"quantity\\"?: number; \\"shipDate\\"?: string; \\"status\\"?: \\"placed\\" | \\"approved\\" | \\"delivered\\"; \\"complete\\"?: boolean; }>;
    export function getOrderById(params: GetOrderByIdParams1 & GetOrderByIdAddedParams1): GetOrderByIdResult1;

    type DeleteOrderParams0 = { \\"path\\": { \\"orderId\\": number; }; };
    type DeleteOrderResult0 = RequestResult<null>;
    export function deleteOrder(params: DeleteOrderParams0): DeleteOrderResult0;

    type CreateUserParams0 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type CreateUserResult0 = RequestResult<null>;
    export function createUser(params: CreateUserParams0 & CreateUserAddedParams0): CreateUserResult0;

    type CreateUserParams1 = { \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type CreateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type CreateUserResult1 = RequestResult<null>;
    export function createUser(params: CreateUserParams1 & CreateUserAddedParams1): CreateUserResult1;

    type CreateUserParams2 = { \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type CreateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type CreateUserResult2 = RequestResult<null>;
    export function createUser(params: CreateUserParams2 & CreateUserAddedParams2): CreateUserResult2;

    type CreateUsersWithListInputParams0 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/xml\\"; }; };
    type CreateUsersWithListInputResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams0 & CreateUsersWithListInputAddedParams0): CreateUsersWithListInputResult0;

    type CreateUsersWithListInputParams1 = { \\"body\\"?: ({ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; })[]; };
    type CreateUsersWithListInputAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; \\"Content-Type\\": \\"application/json\\"; }; };
    type CreateUsersWithListInputResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function createUsersWithListInput(params: CreateUsersWithListInputParams1 & CreateUsersWithListInputAddedParams1): CreateUsersWithListInputResult1;

    type LoginUserParams0 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type LoginUserResult0 = RequestResult<string>;
    export function loginUser(params: LoginUserParams0 & LoginUserAddedParams0): LoginUserResult0;

    type LoginUserParams1 = { \\"query\\"?: { \\"username\\"?: string; \\"password\\"?: string; }; };
    type LoginUserAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type LoginUserResult1 = RequestResult<string>;
    export function loginUser(params: LoginUserParams1 & LoginUserAddedParams1): LoginUserResult1;

    type LogoutUserResult0 = RequestResult<null>;
    export function logoutUser(): LogoutUserResult0;

    type GetUserByNameParams0 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams0 = { \\"header\\"?: { \\"Content-Type\\": \\"application/xml\\"; }; };
    type GetUserByNameResult0 = RequestResult<{ \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }>;
    export function getUserByName(params: GetUserByNameParams0 & GetUserByNameAddedParams0): GetUserByNameResult0;

    type GetUserByNameParams1 = { \\"path\\": { \\"username\\": string; }; };
    type GetUserByNameAddedParams1 = { \\"header\\"?: { \\"Content-Type\\": \\"application/json\\"; }; };
    type GetUserByNameResult1 = RequestResult<{ \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }>;
    export function getUserByName(params: GetUserByNameParams1 & GetUserByNameAddedParams1): GetUserByNameResult1;

    type UpdateUserParams0 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams0 = { \\"header\\"?: { \\"accept\\": \\"application/json\\"; }; };
    type UpdateUserResult0 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams0 & UpdateUserAddedParams0): UpdateUserResult0;

    type UpdateUserParams1 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"user\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; }; };
    type UpdateUserAddedParams1 = { \\"header\\"?: { \\"accept\\": \\"application/xml\\"; }; };
    type UpdateUserResult1 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams1 & UpdateUserAddedParams1): UpdateUserResult1;

    type UpdateUserParams2 = { \\"path\\": { \\"username\\": string; }; \\"body\\"?: { \\"id\\"?: number; \\"username\\"?: string; \\"firstName\\"?: string; \\"lastName\\"?: string; \\"email\\"?: string; \\"password\\"?: string; \\"phone\\"?: string; \\"userStatus\\"?: number; }; };
    type UpdateUserAddedParams2 = { \\"header\\"?: { \\"accept\\": \\"application/x-www-form-urlencoded\\"; }; };
    type UpdateUserResult2 = RequestResult<null>;
    export function updateUser(params: UpdateUserParams2 & UpdateUserAddedParams2): UpdateUserResult2;

    type DeleteUserParams0 = { \\"path\\": { \\"username\\": string; }; };
    type DeleteUserResult0 = RequestResult<null>;
    export function deleteUser(params: DeleteUserParams0): DeleteUserResult0;

    ",
    }
  `);
});
