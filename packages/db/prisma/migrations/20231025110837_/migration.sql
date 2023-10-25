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

-- CreateTable
CREATE TABLE "Qualification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "graduation_year" INTEGER NOT NULL,
    "majors" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Social" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Social_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "shortDescription" TEXT,
    "longDescription" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_company_key" ON "Job"("company");

-- CreateIndex
CREATE UNIQUE INDEX "Qualification_course_key" ON "Qualification"("course");

-- CreateIndex
CREATE UNIQUE INDEX "Social_url_key" ON "Social"("url");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
