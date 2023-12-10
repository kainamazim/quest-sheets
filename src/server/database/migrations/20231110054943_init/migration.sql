-- CreateEnum
CREATE TYPE "ItemRarity" AS ENUM ('common', 'uncommon', 'rare', 'legendary', 'supreme');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER,
    "rarity" "ItemRarity" NOT NULL DEFAULT 'common',
    "title" TEXT NOT NULL,
    "description" TEXT,
    "damage" SMALLINT,
    "activationCost" SMALLINT,
    "rollTheDie" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSheet" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "currentHitPoints" SMALLINT NOT NULL,
    "currentAdventurePoints" SMALLINT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "CharacterSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearningPath" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "LearningPath_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "activationCost" SMALLINT,
    "rollTheDie" BOOLEAN DEFAULT false,
    "learningPathId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterSheetToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AbilityToCharacterSheet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Role_title_key" ON "Role"("title");

-- CreateIndex
CREATE UNIQUE INDEX "LearningPath_roleId_title_key" ON "LearningPath"("roleId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Ability_learningPathId_order_key" ON "Ability"("learningPathId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterSheetToItem_AB_unique" ON "_CharacterSheetToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterSheetToItem_B_index" ON "_CharacterSheetToItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AbilityToCharacterSheet_AB_unique" ON "_AbilityToCharacterSheet"("A", "B");

-- CreateIndex
CREATE INDEX "_AbilityToCharacterSheet_B_index" ON "_AbilityToCharacterSheet"("B");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningPath" ADD CONSTRAINT "LearningPath_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_learningPathId_fkey" FOREIGN KEY ("learningPathId") REFERENCES "LearningPath"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterSheetToItem" ADD CONSTRAINT "_CharacterSheetToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterSheetToItem" ADD CONSTRAINT "_CharacterSheetToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToCharacterSheet" ADD CONSTRAINT "_AbilityToCharacterSheet_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToCharacterSheet" ADD CONSTRAINT "_AbilityToCharacterSheet_B_fkey" FOREIGN KEY ("B") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
