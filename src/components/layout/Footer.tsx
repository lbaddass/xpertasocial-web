import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 text-sm font-mono text-white/40">
      <p>&copy; {new Date().getFullYear()} XpertaSocial. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <Link href="/perfil-corporativo" className="hover:text-white transition-colors">
          Engineering Profile
        </Link>
        <span className='hidden sm:block'>|</span>
        <Link href="/diagnostico" className="hover:text-white transition-colors">
          Diagnóstico
        </Link>
      </div>
    </div>
  );
};

export default Footer;
