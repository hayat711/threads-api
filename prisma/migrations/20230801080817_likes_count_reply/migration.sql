/*
  Warnings:

  - You are about to drop the column `likes` on the `Reply` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,threadId,replyId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Like_userId_threadId_key";

-- AlterTable
ALTER TABLE "Reply" DROP COLUMN "likes",
ADD COLUMN     "likesCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_threadId_replyId_key" ON "Like"("userId", "threadId", "replyId");
