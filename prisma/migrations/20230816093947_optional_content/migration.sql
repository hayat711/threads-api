/*
  Warnings:

  - Added the required column `type` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('POST', 'REPLIES', 'REQUESTS', 'MENTIONS', 'QUOTES', 'REPOSTS');

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "type" "NotificationType" NOT NULL;

-- AlterTable
ALTER TABLE "Reply" ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "quoteContent" TEXT,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT;
