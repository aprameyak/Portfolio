'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MinimalContact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            setFormData({ email: '', message: '' });
            setTimeout(() => {
                setIsModalOpen(false);
                setStatus('idle');
            }, 2000);
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="px-4 sm:px-8 py-32 bg-white text-black text-center border-t border-black/5">
            <div className="max-w-xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs tracking-[0.3em] mb-12 font-bold uppercase"
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl tracking-tight mb-12 font-light"
                >
                    Ready to build something exceptional?
                    <br />
                    Let's connect.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="px-12 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                    Contact Me
                </motion.button>

            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="bg-white border border-black p-8 max-w-md w-full shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <h3 className="text-xl font-medium mb-8 uppercase tracking-widest">Request Resume</h3>
                            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-0 py-2 bg-transparent border-b border-black focus:outline-none focus:border-gray-400 text-black"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-0 py-2 bg-transparent border-b border-black focus:outline-none focus:border-gray-400 text-black resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Submit Request'}
                                </button>

                                {status === 'success' && (
                                    <p className="text-green-600 text-xs font-bold uppercase tracking-widest text-center">Sent successfully.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-600 text-xs font-bold uppercase tracking-widest text-center">Error sending request.</p>
                                )}
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
