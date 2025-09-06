import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell, Legend
} from "recharts";
import "../styles/PortfolioSection.css";

const trafficData = [
  { month: "Jan", visitors: 200 },
  { month: "Feb", visitors: 400 },
  { month: "Mar", visitors: 650 },
  { month: "Apr", visitors: 900 },
  { month: "May", visitors: 1200 },
];

const conversionData = [
  { type: "Before SEO", conversions: 50 },
  { type: "After SEO", conversions: 180 },
];

const sourceData = [
  { name: "Organic", value: 70 },
  { name: "Paid", value: 20 },
  { name: "Referral", value: 10 },
];

const COLORS = ["#28a745", "#444", "#999"];

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Proven Results for Our Clients</h2>
        <p className="portfolio-subtitle">
          From startups to enterprises, our SEO strategies consistently deliver measurable growth.
        </p>
      </div>

      <div className="portfolio-grid">
        {/* Card 1 - Line Chart */}
        <div className="portfolio-card">
          <h3 className="card-title">Organic Traffic Growth</h3>
          <p className="card-desc">+300% visitors in just 5 months</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trafficData}>
              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="#28a745" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Card 2 - Bar Chart */}
        <div className="portfolio-card">
          <h3 className="card-title">Conversions Boost</h3>
          <p className="card-desc">Improved lead conversion rates by 250%</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={conversionData}>
              <XAxis dataKey="type" stroke="#aaa" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="conversions" fill="#28a745" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Card 3 - Pie Chart */}
        <div className="portfolio-card">
          <h3 className="card-title">Traffic Sources</h3>
          <p className="card-desc">70% of traffic driven organically</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={sourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="portfolio-footer">
        <button className="portfolio-btn">View More Case Studies</button>
      </div>
    </section>
  );
};

export default PortfolioSection;
