(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{254:function(t,e,o){t.exports=o.p+"assets/img/mongo-db-icon.f9f6483d.png"},260:function(t,e,o){"use strict";o.r(e);var a=o(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h6",{attrs:{id:"mongodb-v4-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-v4-2"}},[t._v("#")]),t._v(" MongoDB v4.2")]),t._v(" "),a("p",[a("img",{attrs:{src:o(254),alt:"Alt Text"}})]),t._v(" "),a("p",[a("em",[t._v("MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#key-features"}},[t._v("Key Features")])]),a("li",[a("a",{attrs:{href:"#mongodb-atlas"}},[t._v("MongoDB Atlas")])]),a("li",[a("a",{attrs:{href:"#installation"}},[t._v("Installation")])]),a("li",[a("a",{attrs:{href:"#terminology-and-concepts"}},[t._v("Terminology And Concepts")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("MongoDB is a free and open-source cross-platform "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Document-oriented_database",target:"_blank",rel:"noopener noreferrer"}},[t._v("document-oriented database"),a("OutboundLink")],1),t._v(" program. Classified as a NoSQL document database, the data structure is composed of field and value pair which are similar to "),a("a",{attrs:{href:"https://www.json.org/json-en.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Objects"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The values of fields may include other documents, arrays, and arrays of documents.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{ \n        "_id": "5cf0029caff5056591b0ce7d", \n        "fullName": "Charlie Santos",                               \n        "position": "Full-Stack Developer",                         \n        "department": "ISG/SDD/SDC-DevOps",                        \n        "skills": [\n                "API Design",\n                "Application Development"\n         ]\n }\n')])])]),a("p",[t._v("MongoDB is developed by MongoDB Inc., and is published under a combination of the Server Side Public License and the Apache License.")]),t._v(" "),a("h2",{attrs:{id:"key-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-features"}},[t._v("#")]),t._v(" Key Features")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("ACID Guarantees")]),t._v(" - Distributed, cross-shard transactions, global point-in-time reads, and mutable shard key values.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Enterprise Security")]),t._v(" - Client-side field level encryption, multiple CAs with zero downtime certificate rotation, and 3x lower auditing overhead.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("High Performance")]),t._v(" - MongoDB provides high performance data persistence. In particular to the ff:")]),t._v(" "),a("ul",[a("li",[t._v("Support for embedded data models reduces I/O activity on database system.")]),t._v(" "),a("li",[t._v("Indexes support faster queries and can include keys from embedded documents and arrays.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Rich Query Language")]),t._v(" - MongoDB supports a rich query language to support:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/crud/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read and Write Operations(CRUD)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/core/aggregation-pipeline/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Aggregation"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/text-search/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Text Search"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Geospatial Queries"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("High Availability")]),t._v(" - MongoDB's replication facility, called replica set. It provides:")]),t._v(" "),a("ul",[a("li",[t._v("Automatic failover")]),t._v(" "),a("li",[t._v("Data redundancy")])]),t._v(" "),a("p",[a("em",[t._v("A "),a("a",{attrs:{href:"https://docs.mongodb.com/manual/replication/",target:"_blank",rel:"noopener noreferrer"}},[t._v("replica set"),a("OutboundLink")],1),t._v(" is a group in MongoDB servers that maintain the data set, providing redundancy and increasing data availability.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Horizontal Scalability")]),t._v(" - MongoDB provides horizontal scalability as part of its core functionality:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/sharding/#sharding-introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sharding"),a("OutboundLink")],1),t._v(" distributes data across a cluster of machines.")]),t._v(" "),a("li",[t._v("Starting in 3.4, MongoDB supports creating zones of data based on the "),a("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-shard-key",target:"_blank",rel:"noopener noreferrer"}},[t._v("shard key"),a("OutboundLink")],1),t._v(". In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those shards inside the zone. See the "),a("a",{attrs:{href:"https://docs.mongodb.com/manual/core/zone-sharding/#zone-sharding",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zones"),a("OutboundLink")],1),t._v(" manual page for more information.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Support for Multiple Storage Engines")]),t._v(" - MongoDB supports "),a("a",{attrs:{href:"https://docs.mongodb.com/manual/core/storage-engines/",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiple storage engines"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/core/wiredtiger/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WiredTiger Storage Engine"),a("OutboundLink")],1),t._v(" (including support for "),a("a",{attrs:{href:"https://docs.mongodb.com/manual/core/security-encryption-at-rest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Encryption at Rest"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/core/inmemory/",target:"_blank",rel:"noopener noreferrer"}},[t._v("In-Memory Storage Engine."),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[t._v("In addition, MongoDB provides pluggable storage engine API that allows third parties to develop storage engines for MongoDB.")]),t._v(" "),a("h2",{attrs:{id:"mongodb-atlas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-atlas"}},[t._v("#")]),t._v(" MongoDB Atlas")]),t._v(" "),a("p",[t._v("MongoDB atlas is a fully-managed cloud database (database-as-a-service). We don't need to handles all the complexity of deploying, managing the underlying MongoDB infrastructure.\nWith atlas, we'll be more focus on the application development.")]),t._v(" "),a("p",[t._v("To learn more about atlas, kindly follow this "),a("a",{attrs:{href:"https://docs.atlas.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://hub.docker.com/_/mongo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Docker Image"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/guides/server/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install MongoDB Locally"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://aws.amazon.com/quickstart/architecture/mongodb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB AWS Set-Up"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Community Edition Set-up"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/installation/#mongodb-enterprise-edition-installation-tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Enterprise Edition Set-up"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/installation/#upgrade-community-edition-to-enterprise-edition-tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("Upgrade Community Edition to Enterprise Edition Tutorials"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Do you want to try it but you don't have cloud account or even local machine to install with? "),a("br"),t._v(" "),a("br"),t._v("Don't worry we got you.\nTo get free sandbox, just register to MongoDB Atlas and follow the instruction on this "),a("a",{attrs:{href:"https://docs.atlas.mongodb.com/tutorial/create-atlas-account/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Don't know how to start? To get started, kindly follow this "),a("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"terminology-and-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminology-and-concepts"}},[t._v("#")]),t._v(" Terminology And Concepts")]),t._v(" "),a("p",[t._v("Many concepts in SQL databases have close analogs in NoSQL Document Database(MongoDB). The table below outlines the common concepts.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("SQL")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("NoSQL(MongoDB)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ACID Transactions")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ACID Transactions")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Database")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Database")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Table")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Collection")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Row")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Document")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Column")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Field")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Secondary Index")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Secondary Index")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JOINs")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Embedded documents, $lookup & $graphLookup")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GroupBy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Aggregation Pipeline")])])])]),t._v(" "),a("h5",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/installation/#supported-platforms",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supported Platform"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://webassets.mongodb.com/_com_assets/collateral/RDBMStoMongoDBMigration.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("RDBMS to MongoDB Migration Guide"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://mongodb-tools.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Tools"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.dbta.com/Columns/MongoDB-Matters/Limitations-in-MongoDB-Transactions-127057.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Limitations of MongoDB Transactions"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);