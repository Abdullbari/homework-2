import React from "react";

export default function Statistics({ data }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {data.map((item) => (
          <li class="item">
            <p class="label">{item.label}</p>
            <p class="percentage">{item.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
