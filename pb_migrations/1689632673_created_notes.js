migrate((db) => {
  const collection = new Collection({
    "id": "470ga3ux0a3wn9c",
    "created": "2023-07-17 22:24:33.573Z",
    "updated": "2023-07-17 22:24:33.573Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "atuvgufc",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1sopy3y8",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("470ga3ux0a3wn9c");

  return dao.deleteCollection(collection);
})
