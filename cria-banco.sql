CREATE TABLE "accounts" (
	"id" SERIAL PRIMARY KEY,
    "balance" REAL DEFAULT 100 NOT NULL 
);

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "accountId" INT NOT NULL REFERENCES accounts(id)
);

CREATE TABLE "transactions"(
    "id" SERIAL PRIMARY KEY,
    "debitedAccountId" INT NOT NULL REFERENCES accounts(id),
    "creditesAccountId" INT NOT NULL REFERENCES accounts(id),
    "value" REAL NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);
