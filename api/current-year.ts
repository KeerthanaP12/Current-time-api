import { VercelRequest, VercelResponse } from "@vercel/node";
import leftPad from "left-pad";
import { getDateForTimezone } from "./_utils";

export default (req: VercelRequest, res: VercelResponse) => {
  const date = getDateForTimezone(req.query.tz as string);
  const year = (req.query.mockYear as string) || date.getFullYear();

  return res.send(leftPad(year, 4));
};
