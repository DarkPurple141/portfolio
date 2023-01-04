-- CreateTable
CREATE TABLE "Qualification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "graduation_year" INTEGER NOT NULL,
    "majors" TEXT NOT NULL
);
