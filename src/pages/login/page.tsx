import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      // Özel kullanıcı için hesap engelleme popup'ı
      if (email.toLowerCase() === 'chmadarlis@hotmail.com') {
        setShowBlockedModal(true);
      } else {
        setError('Ungültige E-Mail oder Passwort');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Blocked Account Modal */}
      {showBlockedModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowBlockedModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBlockedModal(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl text-neutral-600"></i>
            </button>

            {/* Warning Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-error-warning-line text-4xl text-red-600"></i>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center text-neutral-800 mb-3">
              Kontozugang gesperrt
            </h3>

            {/* Message */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-red-800 leading-relaxed text-center">
                Da Ihre Investitionstransaktionen nicht von Ihnen abgeschlossen wurden, ist die gesetzliche Frist von 48 Stunden abgelaufen und Ihr Systemzugang wurde deaktiviert.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-neutral-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-neutral-600 text-center">
                Bitte kontaktieren Sie unseren Kundenservice für weitere Informationen.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowBlockedModal(false)}
              className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-xl font-semibold hover:from-primary-dark hover:to-primary transition-all cursor-pointer"
            >
              Schließen
            </button>
          </motion.div>
        </motion.div>
      )}
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-gold/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo & Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors mb-6 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="text-sm font-medium">Zurück zur Startseite</span>
          </button>
          
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30">
              <i className="ri-line-chart-line text-3xl text-accent-gold"></i>
            </div>
          </div>
          
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">
            Willkommen zurück
          </h1>
          <p className="text-neutral-600">
            Melden Sie sich an, um auf Ihr Portfolio zuzugreifen
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-neutral-200/50 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-xl text-neutral-400"></i>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                  placeholder="ihre@email.de"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Passwort
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-lock-line text-xl text-neutral-400"></i>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
                >
                  <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-xl`}></i>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3"
              >
                <i className="ri-error-warning-line text-xl text-red-600"></i>
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-semibold hover:from-primary-dark hover:to-primary transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              Anmelden
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <div className="bg-gradient-to-br from-primary/5 to-accent-gold/10 rounded-xl p-4 border border-primary/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-information-line text-accent-gold"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">
                    Demo-Zugangsdaten
                  </p>
                  <div className="space-y-1 text-xs text-neutral-700">
                    <p className="font-mono bg-white/50 px-2 py-1 rounded">
                      E-Mail: demo@demo.com
                    </p>
                    <p className="font-mono bg-white/50 px-2 py-1 rounded">
                      Passwort: demo123
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-neutral-600">
            Noch kein Konto?{' '}
            <button
              onClick={() => navigate('/kontakt')}
              className="text-accent-gold font-semibold hover:text-accent-gold-dark transition-colors cursor-pointer"
            >
              Jetzt Beratung anfragen
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}