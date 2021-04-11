import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import Layout from "../components/layout.jsx";
import { difference } from "https://deno.land/std@0.92.0/datetime/mod.ts";


export default async function homePage(request) {
  function getNowInJst(): Date {
    const now = new Date();
    now.setHours(now.getUTCHours() + 9);
    return now;
  }

  function getEndOfDay(): Date {
    const today = getNowInJst();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
  }

  function getEndOfMonth(): Date {
    const today = getNowInJst();
    return new Date(today.getFullYear(), today.getMonth() + 1, 0); 
  }

  function getEndOfYear(): Date {
    const today = getNowInJst();
    return new Date(today.getFullYear(), 12, 31, 23, 59, 59); 
  }

  function calcTillEndOfDay(): number {
    const now = getNowInJst();
    const endOfDay = getEndOfDay();
    
    const diff = difference(endOfDay, now, { units: ["seconds"] });
    return diff.seconds ? diff.seconds : 0;
  }

  function calcTillEndOfMonthInDays(): number {
    const now = getNowInJst();
    const endOfMonth = getEndOfMonth();
    const diff = difference(endOfMonth, now, { units: ["days"]});
    return diff.days ? diff.days + 1 : 0;
  }

  function calcTillEndOfYear(): number {
    const now = getNowInJst();
    const endOfYear = getEndOfYear();
    const diff = difference(endOfYear, now, { units: ["months"]});
    return diff.months ? diff.months : 0;
  }

  function printWeeksDays(days: number): string {
    const weeks = Math.floor(days / 7);
    const remainDays = days % 7;
    return weeks.toString() + '週間と' + remainDays.toString() + '日';
  }

  
  function printHoursMinutesSeconds(sec_num: number): string {
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
        <div>今日の終わりまで: { printHoursMinutesSeconds(calcTillEndOfDay()) }</div>
        <div>今月の終わりまで: { calcTillEndOfMonthInDays() }日 or {printWeeksDays(calcTillEndOfMonthInDays())}</div>
        <div>今年の終わりまで: { calcTillEndOfYear() }月と{ calcTillEndOfMonthInDays() }日</div>
      </div>
    </Layout>);
}