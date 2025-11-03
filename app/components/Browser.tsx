'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Hero3D from './Hero3D';

export type TabType = 'home' | 'about' | 'projects' | 'experience' | 'skills' | 'contact';

interface Tab {
  id: string;
  type: TabType;
  title: string;
  url: string;
  isActive: boolean;
}

const MAX_TABS = 6;

const Browser = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 'home-1', type: 'home', title: 'Home', url: 'aprameya.dev', isActive: true }
  ]);
  const [addressBarUrl, setAddressBarUrl] = useState('aprameya.dev');
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'info' } | null>(null);

  const tabContent: Record<TabType, { title: string; url: string; component: React.ReactNode }> = {
    home: {
      title: 'Home',
      url: 'aprameya.dev',
      component: <HomeTab />
    },
    about: {
      title: 'About',
      url: 'aprameya.dev/about',
      component: <TabWrapper><About /></TabWrapper>
    },
    projects: {
      title: 'Projects',
      url: 'aprameya.dev/projects',
      component: <TabWrapper><Projects /></TabWrapper>
    },
    experience: {
      title: 'Experience',
      url: 'aprameya.dev/experience',
      component: <TabWrapper><Experience /></TabWrapper>
    },
    skills: {
      title: 'Skills',
      url: 'aprameya.dev/skills',
      component: <TabWrapper><Skills /></TabWrapper>
    },
    contact: {
      title: 'Contact',
      url: 'aprameya.dev/contact',
      component: <TabWrapper><Contact /></TabWrapper>
    }
  };

  const openTab = (type: TabType) => {
    // Check if tab already exists
    const existingTab = tabs.find(tab => tab.type === type);
    if (existingTab) {
      // Switch to existing tab
      setTabs(tabs.map(tab => ({
        ...tab,
        isActive: tab.id === existingTab.id
      })));
      setAddressBarUrl(existingTab.url);
      return;
    }

    // Check max tabs limit
    if (tabs.length >= MAX_TABS) {
      setNotification({ message: `Maximum ${MAX_TABS} tabs allowed. Please close a tab first.`, type: 'error' });
      return;
    }

    const newTab: Tab = {
      id: `${type}-${Date.now()}`,
      type,
      title: tabContent[type].title,
      url: tabContent[type].url,
      isActive: true
    };

    setTabs(tabs.map(t => ({ ...t, isActive: false })).concat(newTab));
    setAddressBarUrl(newTab.url);
  };

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const tabIndex = tabs.findIndex(t => t.id === tabId);
    if (tabIndex === -1) return;

    const tabToClose = tabs[tabIndex];
    const newTabs = tabs.filter(t => t.id !== tabId);

    if (newTabs.length === 0) {
      // If closing last tab, open home tab
      setTabs([{ id: 'home-1', type: 'home', title: 'Home', url: 'aprameya.dev', isActive: true }]);
      setAddressBarUrl('aprameya.dev');
      return;
    }

    // If closing active tab, activate previous or next tab
    if (tabToClose.isActive) {
      const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : 0;
      newTabs[newActiveIndex].isActive = true;
      setAddressBarUrl(newTabs[newActiveIndex].url);
    }

    setTabs(newTabs);
  };

  const switchTab = (tabId: string) => {
    setTabs(tabs.map(tab => ({
      ...tab,
      isActive: tab.id === tabId
    })));
    const activeTab = tabs.find(t => t.id === tabId);
    if (activeTab) {
      setAddressBarUrl(activeTab.url);
    }
  };

  const activeTab = tabs.find(t => t.isActive) || tabs[0];

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            className={`fixed top-20 right-4 z-50 px-4 py-2 rounded-lg text-sm ${
              notification.type === 'error' ? 'bg-red-500/90 text-white' : 'bg-primary/90 text-white'
            }`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Browser Chrome */}
      <div className="bg-surface-light border-b border-primary/10">
        {/* Top Bar with Controls */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/5">
          {/* Browser Controls */}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 rounded-full bg-red-500"
              onClick={() => window.location.reload()}
              title="Close"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 rounded-full bg-yellow-500"
              title="Minimize"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 rounded-full bg-green-500"
              title="Maximize"
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 ml-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded hover:bg-surface"
              title="Back"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded hover:bg-surface"
              title="Forward"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded hover:bg-surface"
              title="Refresh"
              onClick={() => window.location.reload()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </motion.button>
          </div>

          {/* Address Bar */}
          <div className="flex-1 mx-4">
            <div className="flex items-center bg-surface rounded-lg px-4 py-2 border border-primary/10">
              <svg className="w-4 h-4 mr-2 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type="text"
                value={addressBarUrl}
                onChange={(e) => setAddressBarUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const url = addressBarUrl.toLowerCase().trim();
                    const type = url.includes('/about') ? 'about' :
                                url.includes('/projects') ? 'projects' :
                                url.includes('/experience') ? 'experience' :
                                url.includes('/skills') ? 'skills' :
                                url.includes('/contact') ? 'contact' : 'home';
                    openTab(type);
                  }
                }}
                className="flex-1 bg-transparent text-text text-sm focus:outline-none"
                placeholder="Enter URL or search"
              />
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="flex gap-2">
            {(['about', 'projects', 'experience', 'skills', 'contact'] as TabType[]).map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openTab(type)}
                className="px-3 py-1.5 text-xs bg-primary/10 hover:bg-primary/20 text-primary-light rounded-lg transition-colors capitalize"
                title={`Open ${tabContent[type].title}`}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center gap-1 px-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg cursor-pointer transition-colors ${
                tab.isActive
                  ? 'bg-background border-t border-x border-primary/20'
                  : 'bg-surface-light/50 hover:bg-surface-light'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`text-sm whitespace-nowrap ${tab.isActive ? 'text-primary-light' : 'text-text-muted'}`}>
                {tab.title}
              </span>
              {tabs.length > 1 && (
                <motion.button
                  onClick={(e) => closeTab(tab.id, e)}
                  className="w-4 h-4 rounded-full hover:bg-red-500/20 flex items-center justify-center group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <svg className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              )}
            </motion.div>
          ))}
          {tabs.length < MAX_TABS && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openTab('home')}
              className="px-3 py-2 text-text-muted hover:text-primary-light"
              title="New Tab"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-auto bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-full"
          >
            {tabContent[activeTab.type].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Home Tab Component with Basic Info
const HomeTab = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-full flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-16">
      <Hero3D />
      
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Aprameya Kannan
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl mb-8 text-text-muted font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          Crafting Digital Experiences with Code
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 mt-12"
        >
          <motion.p 
            className="text-xl text-center text-primary-light"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            }}
          >
            Studying Computer Science at the University of Maryland
          </motion.p>

          <motion.p
            className="text-text-muted"
          >
            Currently building apps at Lockheed Martin
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <motion.a
            href="https://github.com/aprameyak"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary-light rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aprameyak"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary-light rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-text-muted mb-6">Navigate using the tabs above or quick access buttons</p>
          <div className="flex flex-wrap justify-center gap-3">
            {(['about', 'projects', 'experience', 'skills', 'contact'] as const).map((section) => (
              <motion.span
                key={section}
                className="px-4 py-2 text-sm bg-surface/50 rounded-lg text-text-muted"
                whileHover={{ scale: 1.05, color: '#c77dff' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Wrapper component to ensure proper spacing and animation triggers in tabs
const TabWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-full py-8">
      {children}
    </div>
  );
};

export default Browser;
