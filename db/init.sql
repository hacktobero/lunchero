CREATE TABLE "Organizations" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("id")
)

CREATE TABLE "Users" (
	"id"	INTEGER NOT NULL,
	"username"	TEXT NOT NULL UNIQUE,
	"org_id"	INTEGER NOT NULL,
	"role"	TEXT NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("org_id") REFERENCES "Organizations"("id")
)

CREATE TABLE "Menus" (
	"id"	INTEGER NOT NULL,
	"day"	INTEGER NOT NULL,
	"org_id"	INTEGER,
	PRIMARY KEY("id"),
	FOREIGN KEY("org_id") REFERENCES "Organizations"("id")
)

CREATE TABLE "Meals" (
	"id"	INTEGER NOT NULL,
	"title"	TEXT NOT NULL,
	"description"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"menu_id"	INTEGER NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("menu_id") REFERENCES "Menus"("id")
)