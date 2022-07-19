import React from "react";
import MainDashboard from "../MainDashboard";

const DashboardToday = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  return (
    <div className="db-today-wrapper">
      <MainDashboard />
      {/* <div className="chart-sec">
        <h2 className="text-center">Total No.of Visits in this Weeks</h2>
        <ChartReact />
  </div>*/}
      <h1 className="text-center">{formattedToday}</h1>
      <h1 className="text-center">Today's Inspiration 😃</h1>
      <section className="container-wrap">
        <article className="db-today-left">
          <div className="img-wrap">
            <img
              src="https://i.pinimg.com/736x/42/47/e2/4247e2d58349f5b9d010c52f7a8984bb.jpg"
              alt="Bon-Voyage"
            />
            <img
              src="https://i.pinimg.com/736x/96/73/de/9673de8845cd26da8849778ae7ba4650.jpg"
              alt="Bon-Voyage"
            />
            <img
              src="https://i.pinimg.com/736x/92/cc/38/92cc38bac172105a432fd2a50cc18aa3.jpg"
              alt="Bon-Voyage"
            />
          </div>
          <h5 className="text-center">Bon Voyage!</h5>
          <h1 className="text-center">Travel Through Food - Thailand</h1>
        </article>
        <article className="db-today-right">
          <div className="img-wrap">
            <img
              src="https://i.pinimg.com/736x/a7/a8/d5/a7a8d5dc330a169ca58feba4d7af0456.jpg"
              alt="Comfy Chic"
            />
            <img
              src="https://i.pinimg.com/736x/94/d4/55/94d45550c1e9cb4a40aabb4023f4130c.jpg"
              alt="Comfy Chic"
            />
            <img
              src="https://i.pinimg.com/736x/0f/d1/ff/0fd1ff20f3575b4945c28321e91f3075.jpg"
              alt="Comfy Chic"
            />
          </div>
          <h5 className="text-center">Comfy Chic</h5>
          <h1 className="text-center">Denim Styles to Wear This Season</h1>
        </article>
      </section>
    </div>
  );
};

export default DashboardToday;
