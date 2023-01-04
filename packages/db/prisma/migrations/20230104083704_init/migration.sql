-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "href" TEXT,
    "company" TEXT NOT NULL,
    "start_date" INTEGER NOT NULL,
    "end_date" INTEGER
);
