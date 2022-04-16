import "./NavBar.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SessionContext from "../session/SessionContext";




export default function NavBar() {

  const {
    session: { user: { id, token, role } },
    actions: { logout }
  } = useContext(SessionContext);

  const [isuser, setuser] = useState(false)
  const go = () => {
    const menu = document.querySelector(".menu");
    const navOpen = document.querySelector(".hamburger");
    const navClose = document.querySelector(".close");

    const navLeft = menu.getBoundingClientRect().left;
    navOpen.addEventListener("click", () => {
      if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
      }
    });

    navClose.addEventListener("click", () => {
      if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
      }
    });

    // Fixed Nav
    const navBar = document.querySelector(".nav");
    const navHeight = navBar.getBoundingClientRect().height;
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
      } else {
        navBar.classList.remove("fix-nav");
      }
    });

    // Scroll To
    const links = [...document.querySelectorAll(".scroll-link")];
    links.map((link) => {
      if (!link) return;
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);

        const element = document.getElementById(id);
        const fixNav = navBar.classList.contains("fix-nav");

        navBar.classList.remove("show");
        menu.classList.remove("show");
        // document.body.classList.remove("show");
      });
    });
  };

  useEffect(() => {
    go();
  }, []);



  return (
    <div class="c">
      <nav class="nav containeruser">
        <div class="navigation container">
          {/* <div class="logo">
            <h1>Recycling</h1>
          </div> */}

          <div class="menu">
            <div class="top-nav">
              {/* <div class="logo">
                <h1>Recycling</h1>
              </div> */}
              <div class="close">
                <i class="bx bx-x"></i>
              </div>
            </div>

            <ul class="nav-listuser">
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/AboutUs" class="nav-link">
                  About Us
                </Link>
                
              </li>
              <li class="nav-item">
                <Link to="/ContactUs" class="nav-link">
                  Contact Us
                </Link>
              </li>
              {token && role == 1 && (
                <li class="nav-item">
                  <Link to="/adminpanel" class="nav-link ">
                    Admin Panel
                  </Link>
                </li>
              )}

              {token && role == 0 && (
                <li class="nav-item">
                  <Link to="/userPanel" class="nav-link ">
                    User Panel
                  </Link>
                </li>
              )}


              {id && role ==0 &&
                <li class="nav-item">
                  <Link to="/userprofile" class="nav-link">
                  User  Profile
                  </Link>
                </li>
              }


                {id && role ==0 &&
                <li class="nav-item">
                  <Link to="/postnow" class="nav-link">
                  Auction Page
                  </Link>
                </li>
              }
                {id && role ==1 &&
                <li class="nav-item">
                  <Link to="/postnow" class="nav-link">
                  Auction Page
                  </Link>
                </li>
              }

              {id && role==1 &&
                <li class="nav-item">
                  <Link to="/adminprofile" class="nav-link">
                   admin Profile
                  </Link>
                </li>

              }




              {token ? (<li class="nav-item">
                <button onClick={logout} class="nav-link " class="button">LOG OUT</button>
              </li>) : (

                <li class="nav-item">
                  <Link to="/login" class="nav-link ">
                    login
                  </Link>
                </li>
              )


              }

            </ul>
          </div>


          <div class="hamburger">
            <i class="bx bx-menu"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}