import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import Layout from "../components/layout.jsx";
import { difference } from "https://deno.land/std@0.92.0/datetime/mod.ts";


export default async function homePage(request) {
  const date0 = new Date();
  const date1 = new Date();
  date1.setHours(23);
  date1.setMinutes(59);
  date1.setSeconds(59);
  
  
  const diff = difference(date1, date0, { units: ["minutes"] });
  
  function printSec(sec_num: number): string {
      const hours   = Math.floor(sec_num / 3600);
      const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      const seconds = sec_num - (hours * 3600) - (minutes * 60);
      
      let hours_str = hours.toString();
      let minutes_str = minutes.toString();
      let seconds_str = seconds.toString();
  
      if (hours   < 10) {hours_str   = "0"+hours_str;}
      if (minutes < 10) {minutes_str = "0"+minutes_str;}
      if (seconds < 10) {seconds_str = "0"+seconds_str;}
      return hours_str+':'+minutes_str+':'+seconds_str;
  }

  return (
    <Layout>
      <div className="container mx-auto max-w-screen-md p-4">
          { diff.minutes ? printSec(diff.minutes) : "" }
      </div>
    </Layout>);
}