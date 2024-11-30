/*
  Warnings:

  - Changed the type of `gender` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `wasteFrequency` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `diyLevel` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT NOT NULL,
DROP COLUMN "wasteFrequency",
ADD COLUMN     "wasteFrequency" TEXT NOT NULL,
DROP COLUMN "diyLevel",
ADD COLUMN     "diyLevel" TEXT NOT NULL;

-- DropEnum
DROP TYPE "DIYLevel";

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "WasteFrequency";
