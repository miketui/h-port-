import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-3xl font-semibold tracking-widest text-foreground block mb-6">
              ARIA NOIR
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm font-sans leading-relaxed">
              Global Hair Direction & Styling. <br/>
              London — New York — Paris
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6 text-foreground">Inquiries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:studio@arianoir.com" className="hover:text-primary transition-colors">
                  studio@arianoir.com
                </a>
              </li>
              <li>
                <a href="mailto:press@arianoir.com" className="hover:text-primary transition-colors">
                  press@arianoir.com
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-primary hover:text-foreground transition-colors uppercase tracking-widest text-xs">
                  Bookings
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6 text-foreground">Social</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  TikTok
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
            &copy; {new Date().getFullYear()} Aria Noir. All rights reserved.
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
