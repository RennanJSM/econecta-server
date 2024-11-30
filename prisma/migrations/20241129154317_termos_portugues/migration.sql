/*
  Warnings:

  - The values [BEGINNER,INTERMEDIATE,ADVANCED] on the enum `DIYLevel` will be removed. If these variants are still used in the database, this will fail.
  - The values [MALE,FEMALE,OTHER] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [VERY_LITTLE,MODERATE,LOT] on the enum `WasteFrequency` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DIYLevel_new" AS ENUM ('INICIANTE', 'INTERMEDIARIO', 'AVANCADO');
ALTER TABLE "User" ALTER COLUMN "diyLevel" TYPE "DIYLevel_new" USING ("diyLevel"::text::"DIYLevel_new");
ALTER TYPE "DIYLevel" RENAME TO "DIYLevel_old";
ALTER TYPE "DIYLevel_new" RENAME TO "DIYLevel";
DROP TYPE "DIYLevel_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('MASCULINO', 'FEMININO', 'OUTRO');
ALTER TABLE "User" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "WasteFrequency_new" AS ENUM ('MUITO_POUCO', 'MODERADO', 'MUITO');
ALTER TABLE "User" ALTER COLUMN "wasteFrequency" TYPE "WasteFrequency_new" USING ("wasteFrequency"::text::"WasteFrequency_new");
ALTER TYPE "WasteFrequency" RENAME TO "WasteFrequency_old";
ALTER TYPE "WasteFrequency_new" RENAME TO "WasteFrequency";
DROP TYPE "WasteFrequency_old";
COMMIT;
