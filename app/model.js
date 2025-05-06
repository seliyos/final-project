
export const model = {
    getPageContent(pageName) {
      return $.get(`pages/${pageName}.html`);
    }
  };
  
  