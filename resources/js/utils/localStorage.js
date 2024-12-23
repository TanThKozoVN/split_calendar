const state = {
    getState: (key) => {
      const localKey = localStorage.getItem(key);
      try {
        return JSON.parse(localKey);
      } catch {
        // Not JSON
        return localKey;
      }
    },
    set: (key, value) => {
      if (typeof value === 'object' || Array.isArray(value)) {
        localStorage.setItem(key, JSON.stringify(value));
        return;
      }
      localStorage.setItem(key, value);
    },
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
    setAuth(adminToken) {
      return this.set('ad_token', adminToken);
    },
    getAdminToken() {
      return this.getState('ad_token');
    },
    getUser() {
      return this.getState('user');
    },
    setPreviousURL(previousPage) {
      return this.set('previousPage', previousPage);
    },
    getPreviousURL() {
      return this.getState('previousPage');
    },
    getStateOrDefault(key, defaultVal = {}) {
      const stateData = this.getState(key);
      return stateData || defaultVal;
    },
  };
  
  export default state;
  