const Footer = () => {
  return (
    <footer className="py-3 bg-dark text-light">
      <div className=" text-center">
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
