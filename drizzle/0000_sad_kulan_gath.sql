CREATE TABLE `access_privilege` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`description` varchar(191) NOT NULL,
	`menuChildId` int NOT NULL,
	CONSTRAINT `access_privilege_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `menu_child` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(191) NOT NULL,
	`description` varchar(191) NOT NULL,
	`link` varchar(191) NOT NULL,
	`menuMainId` int NOT NULL,
	CONSTRAINT `menu_child_id` PRIMARY KEY(`id`),
	CONSTRAINT `menu_child_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `menu_main` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(191) NOT NULL,
	CONSTRAINT `menu_main_id` PRIMARY KEY(`id`),
	CONSTRAINT `menu_main_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `role` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(191) NOT NULL,
	`createdAt` datetime(3) NOT NULL DEFAULT '2025-07-07 08:23:42.422',
	`updatedAt` datetime(3) NOT NULL DEFAULT '2025-07-07 08:23:42.422',
	CONSTRAINT `role_id` PRIMARY KEY(`id`),
	CONSTRAINT `role_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `role_access_privilege` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`roleId` int NOT NULL,
	`accessPrivilegeId` int NOT NULL,
	CONSTRAINT `role_access_privilege_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	`fullName` varchar(191) NOT NULL,
	`status` enum('Activated','Deactivated') NOT NULL DEFAULT 'Activated',
	`createdAt` datetime(3) NOT NULL DEFAULT '2025-07-07 08:23:42.422',
	`updatedAt` datetime(3) NOT NULL DEFAULT '2025-07-07 08:23:42.422',
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_username_unique` UNIQUE(`username`)
);
--> statement-breakpoint
CREATE TABLE `user_role` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`userId` varchar(191) NOT NULL,
	`roleId` int NOT NULL,
	CONSTRAINT `user_role_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `access_privilege_menuChildId_fkey` ON `access_privilege` (`menuChildId`);--> statement-breakpoint
CREATE INDEX `menu_child_menuMainId_fkey` ON `menu_child` (`menuMainId`);--> statement-breakpoint
CREATE INDEX `role_access_privilege_roleId_fkey` ON `role_access_privilege` (`roleId`);--> statement-breakpoint
CREATE INDEX `role_access_privilege_accessPrivilegeId_fkey` ON `role_access_privilege` (`accessPrivilegeId`);--> statement-breakpoint
CREATE INDEX `user_role_roleId_fkey` ON `user_role` (`roleId`);--> statement-breakpoint
CREATE INDEX `user_role_userId_fkey` ON `user_role` (`userId`);