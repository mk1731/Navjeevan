class Specialheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
    <!-- ===== TOP HEADER ===== -->
    <header class="top-header" id="home">
        <div class="container header-flex">

            <div class="header-logo">
                <a href="home.html">
                    <img src="assets/logo.png" alt="Trust Logo">
                </a>
            </div>

            <div class="header-title">
                <h4>Navjeevan Education Society's</h4>
                <h1>POLYTECHNIC & COLLEGE of Engineering</h1>
                <p>
                    Approved by AICTE | Affiliated to MSBTE | Affiliated to
                    Dr. Babasaheb Ambedkar Technological University | DTE CODE 03723
                </p>
            </div>

        </div>
    </header>
    

    <!-- ===== NAVBAR ===== -->
    <nav class="navbar">
        <div class="container">
            <ul class="nav-menu">

                <li><a href="home.html">Home</a></li>

                <li class="dropdown">
                    <a href="About.html">About Us</a>
                    <ul class="dropdown-menu">
                        <li><a href="About.html#vision">Vision & Mission</a></li>
                        <li><a href="About.html#Board of Governance">Board of Governance</a></li>
                        <li><a href="About.html#overview">About Institute</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#">Admission</a>
                    <ul class="dropdown-menu">
                        <li><a href="xDiploma First Year.html">Diploma First Year Admissions</a></li>
                        <li><a href="xDiploma Direct Second Year Admissions.html">Diploma Direct Second Year Admissions</a></li>
                        <li><a href="Engineering First Year Admissions.html">Undergraduate Engineering First Year Admissions</a></li>
                        <li><a href="Engineering Direct Second Year Admissions.html">Undergraduate Engineering Direct Second Year Admissions</a></li>
                    </ul>
                </li>

                <!-- Academics -->
                <li class="dropdown">
                    <a href="#">Academics</a>
                    <ul class="dropdown-menu">

                        <!-- Diploma with right-side submenu -->
                        <li class="dropdown-right">
                            <a href="#">Diploma ▸</a>
                            <ul class="dropdown-menu-right">
                                <li><a href="dComputer Engineering.html">Computer Engineering</a></li>
                                <li><a href="dInformation Technology.html">Information Technology</a></li>
                                <li><a href="dElectronics & Telecommunication.html">Electronics & Telecommunication</a></li>
                                <li><a href="dElectrical Engineering.html">Electrical Engineering</a></li>
                                <li><a href="dMechanical Engineering.html">Mechanical Engineering</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-right">
                            <a href="#">Undergraduate Engineering ▸</a>
                            <ul class="dropdown-menu-right">
                                <li><a href="eArtificial Intelligence & Data Science.html">Artificial Intelligence & Data Science</a></li>
                                <li><a href="eComputer Engineering.html">Computer Engineering</a></li>
                                <li><a href="eComputer Science & Engineering.html">Computer Science & Engineering</a></li>
                                <li><a href="eInformation Technology.html">Information Technology</a></li>
                                <li><a href="eElectronics & Telecom Engineering.html">Electronics & Telecom Engineering</a></li>
                                <li><a href="eElectrical Engineering.html">Electrical Engineering</a></li>

                            </ul>
                        </li>
                        <li><a href="Examinations.html">Examinations</a></li>
                        <li><a href="https://result.msbte.ac.in/" target="_blank">Result</a></li>
                     <li><a href="Scholarship.html">Scholarship</a></li></ul>
                </li>

                <li class="dropdown">
                    <a href="#">Campus Tour</a>
                    <ul class="dropdown-menu rounded-dropdown">
                        <li><a href="Campus Tour.html">Infrastructure</a></li>
                        <li><a href="Campus Tour.html">Labs</a></li>
                        <li><a href="Campus Tour.html">Classrooms</a></li>
                        <li><a href="Campus Tour.html">Library</a></li>
                        <li><a href="Campus Tour.html">Canteen</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#">Life at NESP</a>
                    <ul class="dropdown-menu">
                        <li><a href="Sports.html">Sports</a></li>
                        <li><a href="Cultural Fest.html">Cultural Fest</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#">Student Corner</a>
                    <ul class="dropdown-menu">
                        <li><a href="Student Login.html">Student Login</a></li>
                        <li><a href="Student Registration.html">Student Registration</a></li>
                    </ul>
                </li>

                <li><a href="Contact.html">Contact</a></li>

            </ul>
        </div>
    </nav>

        `;
}
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
<!-- ===== FOOTER ===== -->
<footer class="main-footer">
    <div class="container footer-grid">

        <!-- ===== FOOTER LEFT (LOGO + NAME) ===== -->
        <div class="footer-col footer-about">
            <img src="assets/logo.png" alt="Institute Logo" class="footer-logo">

            <h3>
                Navjeevan Education Society's <br>
                Polytechnic & College of Engineering
            </h3>

            <p>
                Approved by AICTE <br>
                Affiliated to MSBTE <br>
                Affiliated to Dr. Babasaheb Ambedkar Technological University <br>
                DTE Code: 03723
            </p>
        </div>

        <!-- ===== CONTACT US ===== -->
        <div class="footer-col">
            <h4>Contact Us</h4>

            <ul>
                <li>
                    Navjeevan Education Society's Polytechnic & College of Engineering,<br>
                    Ganesh Nagar, Ganesh Path, Bhandup (W) - 78
                </li>
                <li>📞 9136926999 / 7715845144
</li>
                <li>✉️ nesp@gmail.com</li>
                <li>📍 <a href="https://maps.app.goo.gl/irkNhwqFxSxTVCg99" target="_blank">Get Directions</a></li>
            </ul>
        </div>

        <!-- ===== ACADEMICS (SIDE BY SIDE) ===== -->
<div class="footer-col">
    <h4>Departments</h4>

    <div class="footer-academics two-col">

        <!-- Diploma -->
        <div class="footer-academic-block">
            <h5>Diploma</h5>
            <ul>
                <li><a href="dComputer Engineering.html">Computer Engineering</a></li>
                <li><a href="dInformation Technology.html">Information Technology</a></li>
                <li><a href="dElectronics & Telecommunication.html">Electronics & Telecommunication</a></li>
                <li><a href="dElectrical Engineering.html">Electrical Engineering</a></li>
                <li><a href="dMechanical Engineering.html">Mechanical Engineering</a></li>
            </ul>
        </div>

        <!-- Undergraduate Engineering -->
        <div class="footer-academic-block">
            <h5>Engineering</h5>
            <ul>
                <li><a href="eArtificial Intelligence & Data Science.html">Artificial Intelligence & Data Science</a></li>
                <li><a href="eComputer Engineering.html">Computer Engineering</a></li>
                <li><a href="eComputer Science & Engineering.html">Computer Science & Engineering</a></li>
                <li><a href="eInformation Technology.html">Information Technology</a></li>
                <li><a href="eElectronics & Telecom Engineering.html">Electronics & Telecommunication Engineering</a></li>
                <li><a href="eElectrical Engineering.html">Electrical Engineering</a></li>
            </ul>
        </div>

    </div>
</div>


        <!-- ===== WEBSITE ===== -->
        <div class="footer-col">
            <h4>Website</h4>

            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About Institute</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>

    </div>

    <!-- ===== FOOTER BOTTOM ===== -->
    <div class="footer-bottom">
        <p>
            © 2026 Navjeevan Education Society's Polytechnic & College of Engineering.
            All Rights Reserved. | Designed by Mayuresh Patil
        </p>
    </div>
</footer>

        `; 
}
}

customElements.define('special-header',Specialheader);
customElements.define('special-footer',SpecialFooter);