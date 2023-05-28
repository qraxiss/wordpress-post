import { BaseError } from "../../errors/errors";
import { toJson } from "../../errors/json";

export function status500 (err: BaseError | Error, req: any, res: any, next: any) {
  const json = toJson(err);

  if (err instanceof BaseError){
    res.status(json.status);
    delete json.status
  }

  if (err instanceof Error){
    res.status(500)
  }


  res.json(json);
}
