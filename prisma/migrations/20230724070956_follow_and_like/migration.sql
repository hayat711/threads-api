/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Reply` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[threadId]` on the table `Reply` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorId]` on the table `Thread` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Like" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "threadId" TEXT NOT NULL,
    "replyId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "isRestricted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_threadId_key" ON "Like"("userId", "threadId");

-- CreateIndex
CREATE UNIQUE INDEX "Reply_authorId_key" ON "Reply"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Reply_threadId_key" ON "Reply"("threadId");

-- CreateIndex
CREATE UNIQUE INDEX "Thread_authorId_key" ON "Thread"("authorId");

-- CreateIndex
CREATE INDEX "authorId" ON "Thread"("authorId");

-- CreateIndex
CREATE INDEX "username" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Reply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
