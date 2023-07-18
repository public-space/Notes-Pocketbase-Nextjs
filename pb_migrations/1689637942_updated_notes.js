migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("470ga3ux0a3wn9c")

  // remove
  collection.schema.removeField("1sopy3y8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dfzcqxmd",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("470ga3ux0a3wn9c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1sopy3y8",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("dfzcqxmd")

  return dao.saveCollection(collection)
})
