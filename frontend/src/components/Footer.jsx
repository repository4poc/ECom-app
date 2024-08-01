function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="row bg-light footer">
      <div class="col text-center">
        <span class="text-muted">
          Punjab Bottle Agency &copy; {currentYear}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
