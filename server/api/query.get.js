import { getQuery, defineEventHandler } from "h3";
import { queryByCollection } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event.req);
var docs = await queryByCollection(query.col);
    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  } 
});