import React from 'react';
import './footer.css';

export default function Footer() {

    return (
        <div>
            <footer class="F_section F_bg-footer">
                <div class="F_container">
                    <div class="F_row">
                        <div class="F_col-lg-3">
                            <div class="">
                                <h3 class="F_footer-heading F_text-uppercase F_text-white">Information</h3>
                                <ul class="F_list-unstyled F_footer-link F_mt-4">
                                    <li><a href="">Pages</a></li>
                                    <li><a href="">Our Team</a></li>
                                    <li><a href="">Feuchers</a></li>
                                    <li><a href="">Pricing</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="F_col-lg-3">
                            <div class="">
                                <h3 class="F_footer-heading F_text-uppercase F_text-white">Ressources</h3>
                                <ul class="F_list-unstyled F_footer-link F_mt-4">
                                    <li><a href="">Monitoring Grader </a></li>
                                    <li><a href="">Video Tutorial</a></li>
                                    <li><a href="">Term &amp; Service</a></li>
                                    <li><a href="">Zeeko API</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="F_col-lg-2">
                            <div class="">
                                <h3 class="F_footer-heading F_text-uppercase F_text-white">Help</h3>
                                <ul class="F_list-unstyled F_footer-link F_mt-4">
                                    <li><a href="">Sign Up </a></li>
                                    <li><a href="">Login</a></li>
                                    <li><a href="">Terms of Services</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="F_col-lg-4">
                            <div class="">
                                <h3 class="F_footer-heading F_text-uppercase F_text-white">Contact Us</h3>
                                <p class="F_contact-info F_mt-4">Contact us if need help withanything</p>
                                <p class="F_contact-info">+01 123-456-7890</p>
                                <div class="F_mt-5">
                                    <ul class="F_list-inline">
                                        <li class="F_list-inline-item"><a href="#"><i class="F_fab F_facebook F_footer-social-icon F_fa-facebook-f"></i></a></li>
                                        <li class="F_list-inline-item"><a href="#"><i class="F_fab F_twitter F_footer-social-icon F_fa-twitter"></i></a></li>
                                        <li class="F_list-inline-item"><a href="#"><i class="F_fab F_google F_footer-social-icon F_fa-google"></i></a></li>
                                        <li class="F_list-inline-item"><a href="#"><i class="F_fab F_apple F_footer-social-icon F_fa-apple"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="F_text-center F_mt-5">
                    <p class="F_footer-alt F_mb-0 F_f-14">2019 © Anup, All Rights Reserved</p>
                </div>
            </footer>
        </div>

    )
}