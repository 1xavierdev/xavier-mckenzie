const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm font-mono">
          Designed & Built by{" "}
          <span className="text-primary">Xavier McKenzie</span>
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2 font-mono">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
