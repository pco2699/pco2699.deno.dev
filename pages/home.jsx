import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import Layout from "../components/layout.jsx";

export default async function homePage(request) {

  return (<Layout>
    <div className="container mx-auto max-w-screen-md p-4">
        Hello World from pco2699!
    </div>
  </Layout>);
}