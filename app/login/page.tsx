'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './login.module.css';

export default function Login() {
    const [activeTab, setActiveTab] = useState<'login' | 'register' | 'forgot-password'>('login');

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle auth logic here based on activeTab
        console.log(`Action: ${activeTab}`);
    };

    return (
        <main>
            {/* Page Title Section */}
            <section className={styles.pageTitle}>
                <div className={styles.patternLayer}>
                    {/* Add pattern backgrounds here if available in your public folder */}
                </div>
                <div className={styles.container}>
                    <div className={styles.contentBox}>
                        <h1>Sign In</h1>
                        <ul className={styles.breadCrumb}>
                            <li><Link href="/">Home</Link></li>
                            <li>/</li>
                            <li>Sign In</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Login Section */}
            <section className={styles.registerSection}>
                <div className={styles.container}>
                    <div className={styles.secTitle}>
                        <h5>Sign / Register</h5>
                    </div>
                    <div className={styles.tabsBox}>
                        <div className={styles.tabBtnBox}>
                            <ul className={styles.tabBtns}>
                                <li
                                    className={`${styles.tabBtn} ${activeTab === 'login' ? styles.activeBtn : ''}`}
                                    onClick={() => setActiveTab('login')}
                                >
                                    Login
                                </li>
                                <li
                                    className={`${styles.tabBtn} ${activeTab === 'register' ? styles.activeBtn : ''}`}
                                    onClick={() => setActiveTab('register')}
                                >
                                    Register
                                </li>
                            </ul>
                        </div>

                        <div className={styles.tabsContent}>
                            <div className={styles.innerBox}>
                                <h4>{activeTab === 'login' ? 'Sign in to your account' : 'Register a new account'}</h4>
                                {activeTab !== 'forgot-password' && (
                                    <form onSubmit={handleAuth}>
                                        {activeTab === 'register' && (
                                            <div className={styles.formGroup}>
                                                <label>Name</label>
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    required={activeTab === 'register'} 
                                                    placeholder="Enter full name" 
                                                />
                                            </div>
                                        )}
                                        <div className={styles.formGroup}>
                                            <label>Email address</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                required 
                                                placeholder="Enter email address" 
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Password</label>
                                            <input 
                                                type="password" 
                                                name="password" 
                                                required 
                                                placeholder="Enter password" 
                                            />
                                            {activeTab === 'login' && (
                                                <div style={{ marginTop: '8px', textAlign: 'right' }}>
                                                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('forgot-password'); }} style={{ color: '#ff5a5f', fontSize: '14px', textDecoration: 'none' }}>
                                                        Forgot your password?
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <button type="submit" className={styles.themeBtn}>
                                                {activeTab === 'login' ? 'Sign in' : 'Register'}
                                            </button>
                                        </div>
                                        {activeTab === 'login' && (
                                            <div className={styles.formGroup}>
                                                <button type="button" className={styles.themeBtn} style={{ background: '#333', marginTop: '10px' }}>
                                                    Apply (Requires Login)
                                                </button>
                                            </div>
                                        )}
                                    </form>
                                )}

                                {activeTab === 'forgot-password' && (
                                    <form onSubmit={handleAuth}>
                                        <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
                                            Forgot your password? No problem. Just let us know your email address and we will email you a password reset link.
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Email address</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                required 
                                                placeholder="Enter email address" 
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <button type="submit" className={styles.themeBtn}>
                                                Email Password Reset Link
                                            </button>
                                        </div>
                                        <div className={styles.otherText}>
                                            <p><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('login'); }}>Back to Login</a></p>
                                        </div>
                                    </form>
                                )}

                                {activeTab === 'login' && (
                                    <div className={styles.otherText}>
                                        <p>Don&apos;t have an account? <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('register'); }}>Register Now</a></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
