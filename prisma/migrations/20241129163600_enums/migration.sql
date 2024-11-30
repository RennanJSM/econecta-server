/*
  Warnings:

  - Changed the type of `gender` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `wasteFrequency` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `diyLevel` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WasteFrequency" AS ENUM ('MUITO_POUCO', 'MODERADO', 'MUITO');

-- CreateEnum
CREATE TYPE "DIYLevel" AS ENUM ('INICIANTE', 'INTERMEDIARIO', 'AVANCADO');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MASCULINO', 'FEMININO', 'OUTRO');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL,
DROP COLUMN "wasteFrequency",
ADD COLUMN     "wasteFrequency" "WasteFrequency" NOT NULL,
DROP COLUMN "diyLevel",
ADD COLUMN     "diyLevel" "DIYLevel" NOT NULL;
