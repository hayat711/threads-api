-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "repostedFromId" TEXT,
ADD COLUMN     "repostsCount" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_repostedFromId_fkey" FOREIGN KEY ("repostedFromId") REFERENCES "Thread"("id") ON DELETE SET NULL ON UPDATE CASCADE;
