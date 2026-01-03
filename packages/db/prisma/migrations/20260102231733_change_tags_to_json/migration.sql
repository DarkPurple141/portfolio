/*
  Warnings:

  - You are about to alter the column `tags` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "tags" JSONB NOT NULL DEFAULT [],
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Post" ("code", "content", "createdAt", "description", "id", "published", "slug", "tags", "title", "updatedAt") SELECT "code", "content", "createdAt", "description", "id", "published", "slug", "tags", "title", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
