import React from "react";

const Footer = () => {
  return (
    <section className="flexs">
      <footer class="footer p-10 justify-items-center h-60 bg-[url('https://i.ibb.co/XZxPJXp/footer.png')]">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <p className="text-center mb-5">
        &#169; {new Date().getFullYear()} All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
