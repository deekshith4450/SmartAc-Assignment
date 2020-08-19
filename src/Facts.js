import React from 'react';
import './Facts.css';
import data from './info/facts.json';

function Facts() {
  return (
    <div>
      <ul className="fact-container">
        <li className="fact-heading">
            <h1>Fun Facts About Texas</h1>
        </li>
        {
            (data.facts || []).map((f,k) => {
                return (
                    <li key={k} className="fact-item">
                        {f}
                    </li>
                );
            })
        }
      </ul>
    </div>
  );
}

export default Facts;
