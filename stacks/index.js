import {StorageStack} from './StorageStack';
import { ApiStack } from "./ApiStack";
import { AuthStack } from './AuthStack';


export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack).stack(ApiStack).stack(AuthStack);
}