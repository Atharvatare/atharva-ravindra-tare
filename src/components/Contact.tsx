import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setStatus('sending');

    // NOTE: You must replace these with your actual EmailJS keys!
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create a service and a template.
    // 3. Paste the Service ID, Template ID, and Public Key below.
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      // Simulate success if keys aren't added yet
      setTimeout(() => setStatus('success'), 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current?.reset();
      }, (error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
          Let's Connect
        </h2>
        <p className="text-white/60">Have a project in mind? I'd love to hear about it.</p>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-amber-500 rounded-full mx-auto mt-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px]" />
        
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6"
            >
              <CheckCircle size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-white/60 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="relative z-10 flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-sky-400 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-sky-400 uppercase tracking-wider">Your Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-sky-400 uppercase tracking-wider">Message</label>
              <textarea 
                name="message"
                required
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                placeholder="Hello Atharva, I would like to discuss..."
              />
            </div>
            
            {status === 'error' && (
              <div className="flex items-center gap-2 text-rose-400 text-sm">
                <AlertCircle size={16} /> Something went wrong. Please try again.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full md:w-auto self-end px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
