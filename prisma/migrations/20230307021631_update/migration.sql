-- AlterTable
ALTER TABLE `users` MODIFY `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);
