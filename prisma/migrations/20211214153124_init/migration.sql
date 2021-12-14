-- CreateTable
CREATE TABLE `Home` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categorie` CHAR(255) NOT NULL,
    `image` LONGTEXT NOT NULL,
    `lien` LONGTEXT NOT NULL,
    `nom` CHAR(255) NOT NULL,
    `actif` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
