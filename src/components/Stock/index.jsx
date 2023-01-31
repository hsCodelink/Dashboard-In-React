import React from "react";
import style from "./Stock.module.css";
import { ResponsiveLine } from "@nivo/line";
import { chartData, socialIconDeatils } from "../../shared";
import Card from "./Card";

const Stock = () => {
  return (
    <div className="container">
      <div className={style.mainStockSection}>
        <div className={style.leftChartSection}>
          <div className={style.chartHeading}>
            <h3>Stocks Graph</h3>
            <h3>Outcome Statistics</h3>
          </div>
          <ResponsiveLine
            height={400}
            data={chartData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={null}
            enableGridX={false}
            colors={{ scheme: "category10" }}
            lineWidth={5}
            enablePoints={false}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            enablePointLabel={true}
            pointLabelYOffset={-12}
            useMesh={true}
          />
        </div>
        <div className={style.rightSection}>
          <div className={style.rightSectionWrapper}>
            <div>
              {socialIconDeatils.map((item, index) => (
                <Card {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
