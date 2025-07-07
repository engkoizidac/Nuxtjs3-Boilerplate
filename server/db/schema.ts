import {
  mysqlTable,
  varchar,
  int,
  datetime,
  primaryKey,
  unique,
  index,
  mysqlEnum,
  serial,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

export const menuMain = mysqlTable("menu_main", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 191 }).notNull().unique(),
});

export const menuChild = mysqlTable(
  "menu_child",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 191 }).notNull().unique(),
    description: varchar("description", { length: 191 }).notNull(),
    link: varchar("link", { length: 191 }).notNull(),
    menuMainId: int("menuMainId").notNull(),
  },
  (table) => ({
    menuMainIdIdx: index("menu_child_menuMainId_fkey").on(table.menuMainId),
  })
);

export const accessPrivilege = mysqlTable(
  "access_privilege",
  {
    id: serial("id").primaryKey(),
    description: varchar("description", { length: 191 }).notNull(),
    menuChildId: int("menuChildId").notNull(),
  },
  (table) => ({
    menuChildIdIdx: index("access_privilege_menuChildId_fkey").on(
      table.menuChildId
    ),
  })
);

export const role = mysqlTable("role", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 191 }).notNull().unique(),
  createdAt: datetime("createdAt", { fsp: 3 }).notNull().default(new Date()),
  updatedAt: datetime("updatedAt", { fsp: 3 }).notNull().default(new Date()),
});

export const roleAccessPrivilege = mysqlTable(
  "role_access_privilege",
  {
    id: serial("id").primaryKey(),
    roleId: int("roleId").notNull(),
    accessPrivilegeId: int("accessPrivilegeId").notNull(),
  },
  (table) => ({
    roleIdIdx: index("role_access_privilege_roleId_fkey").on(table.roleId),
    accessPrivilegeIdIdx: index(
      "role_access_privilege_accessPrivilegeId_fkey"
    ).on(table.accessPrivilegeId),
  })
);

export const user = mysqlTable("user", {
  id: varchar("id", { length: 191 }).primaryKey(),
  username: varchar("username", { length: 191 }).notNull().unique(),
  password: varchar("password", { length: 191 }).notNull(),
  fullName: varchar("fullName", { length: 191 }).notNull(),
  status: mysqlEnum("status", ["Activated", "Deactivated"])
    .notNull()
    .default("Activated"),
  createdAt: datetime("createdAt", { fsp: 3 }).notNull().default(new Date()),
  updatedAt: datetime("updatedAt", { fsp: 3 }).notNull().default(new Date()),
});

export const userRole = mysqlTable(
  "user_role",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 191 }).notNull(),
    roleId: int("roleId").notNull(),
  },
  (table) => ({
    roleIdIdx: index("user_role_roleId_fkey").on(table.roleId),
    userIdIdx: index("user_role_userId_fkey").on(table.userId),
  })
);
