import React, { Component } from 'react';

export default function Navigation(props) {

    const navState = props.nav;

    const nav =
    <div>
            <nav aria-label="Page navigation">

              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>

                <li className="page-item" active>
                  <a className="page-link" href="#" aria-label="Previous">
                    <span className="sr-only">Navigation</span>
                  </a>
                </li>

                <li className="page-item" >
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
    </div>

    return nav;

}