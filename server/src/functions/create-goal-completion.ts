import { goalCompletions, goals } from "../db/schema"
import { db } from "../db"
import { count, lte , gte, sql, eq, and } from "drizzle-orm"
import dayjs from "dayjs"

