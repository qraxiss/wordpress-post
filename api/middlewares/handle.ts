import { BaseError } from "../../errors/errors";
import { toJson } from "../../errors/json";

export function status500 (err: BaseError | Error, req: any, res: any, next: any) {
  const res_json = toJson(err);
  res.status(res_json.status);
  res.json(res_json);
}
