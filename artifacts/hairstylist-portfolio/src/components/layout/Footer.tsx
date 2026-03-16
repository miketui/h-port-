import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="font-display text-3xl font-semibold tracking-widest text-foreground block mb-6 hover:text-primary transition-colors">
              MDW
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm font-sans leading-relaxed mb-8">
              Michael David Warren Jr. <br/>
              Hair Direction · Celebrity · Editorial <br/>
              Los Angeles — New York — Global
            </p>
            
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-foreground">Stay Connected</p>
              <div className="flex w-full max-w-xs border border-border">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none focus:outline-none focus:ring-0 px-4 py-2 text-sm w-full"
                />
                <button className="px-4 text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors border-l border-border">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="font-display text-lg mb-6 text-foreground">Portfolio</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/portfolio/covers" className="hover:text-primary transition-colors">Covers</Link>
              </li>
              <li>
                <Link href="/portfolio/editorial" className="hover:text-primary transition-colors">Editorial</Link>
              </li>
              <li>
                <Link href="/portfolio/red-carpet" className="hover:text-primary transition-colors">Red Carpet</Link>
              </li>
              <li>
                <Link href="/portfolio/beauty" className="hover:text-primary transition-colors">Beauty</Link>
              </li>
              <li>
                <Link href="/portfolio/commercial-ecom" className="hover:text-primary transition-colors">Commercial</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-display text-lg mb-6 text-foreground">Inquiries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:studio@mdwstylist.com" className="hover:text-primary transition-colors">
                  studio@mdwstylist.com
                </a>
              </li>
              <li className="pt-4">
                <Link href="/contact" className="text-primary hover:text-foreground transition-colors uppercase tracking-widest text-xs border-b border-primary/30 hover:border-foreground pb-0.5">
                  Bookings & Contact
                </Link>
              </li>
            </ul>
            
            <h4 className="font-display text-lg mt-8 mb-4 text-foreground">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Models.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            &copy; {new Date().getFullYear()} MDW. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground tracking-wider uppercase">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
