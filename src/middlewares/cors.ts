import cors from "cors";

import { ALLOWED_ORIGINS } from "../firestore";

export const corsMiddleware = cors({ origin: ALLOWED_ORIGINS });
