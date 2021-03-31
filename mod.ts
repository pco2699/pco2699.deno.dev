import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";
import homePage from "./pages/home.jsx";

serve({
  "/": homePage,
});