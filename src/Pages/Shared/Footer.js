import React from "react";

const Footer = () => {
    return (
        <section className="flexs">
            <footer
                //   style={{backgroubd: `url(https://i.ibb.co/XZxPJXp/footer.png)`,
                //   backgroubdSize: 'cover'
                // }}
                className="footer p-10 justify-items-center bg-[url('https://i.ibb.co/XZxPJXp/footer.png')]"
            >
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <p className="text-center mb-5 mt-10">
                &#169; {new Date().getFullYear()} All Rights Reserved
            </p>
        </section>
    );
};

export default Footer;
