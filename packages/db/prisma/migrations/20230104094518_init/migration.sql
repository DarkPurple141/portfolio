/*
  Warnings:

  - A unique constraint covering the columns `[course]` on the table `Qualification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Qualification_course_key" ON "Qualification"("course");
