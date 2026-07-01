const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="text-center text-sm text-stone-600">
        <p>© {currentYear} Joaquin Franco. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
